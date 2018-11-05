import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Button } from 'reactstrap';

import { MAX_POKEMON } from '../core/Constants';
import { getRangeOfPokemon, getPokemonDetails } from '../core/PokemonAPI';
import Header from './Header';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
import LoadingError from './LoadingError';
import PokemonModal from '../modal/PokemonModal';

import '../../styles/home/Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      pokemonDetails: null,
      error: '',
      shouldInfiniteScroll: false,
      initialLoad: true,
      modal: false,
      hasMore: true,
    };
    this.perPage = 20;

    this.getDetails = this.getDetails.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.enableInfiniteScroll = this.enableInfiniteScroll.bind(this);
  }

  /**
   * Fetches a page of pokemon from the server and adds them to the current state
   * @param  {int} page - the page to fetch (1 indexed)
   * @return {void}
   */
  fetchPokemon(page) {
    if (this.state.error || this.state.pokemon.length >= MAX_POKEMON)
        return;

    const id = this.state.pokemon.length + 1;
    let range;
    if (id + this.perPage > MAX_POKEMON) {
      this.setState({ shouldInfiniteScroll: false })
      range = MAX_POKEMON - id + 1;
    } else {
      range = this.perPage;
    }
    return getRangeOfPokemon(id, range)
      .then(newPokemon => {
        const oldPokemon = this.state.pokemon.slice();
        const hasMore = id + range < MAX_POKEMON ? true : false;
        this.setState({
          pokemon: [...oldPokemon, ...newPokemon],
          initialLoad: false,
          hasMore: hasMore,
        });
      })

      .catch(error => {
        this.setState({
            error: error.message,
            shouldInfiniteScroll: false,
        });
      });
  }

  displayPokemonCards () {
    return this.state.pokemon.map(pokemon => {
      return <PokemonCard {...pokemon} key={pokemon.id} handlePokemonCardClick={this.getDetails} />
    });
  }

  renderLoadButton () {
    return this.state.hasMore ? (
      <div>
        <Button
          className="load-button"
          color="primary" size="lg"
          onClick={() => {
            this.enableInfiniteScroll();
            this.clearError();
          }}
        >
          Load more Pokemon
        </Button>
      </div>
    ) : null;
  }

  enableInfiniteScroll () {
    this.setState({ shouldInfiniteScroll: true });
  }

  clearError () {
    this.setState({ error: '' });
  }

   /**
   * Fetches a pokemon details from server and adds them to the current state
   * @param  {int} id - the id of the pokemon to fetch
   * @return {void}
   */
  getDetails (id) {
    if (this.state.error ||
      id < 1 ||
      id > 807)
      return;

    return getPokemonDetails(id)
      .then(pokemonDetails => {
        this.setState({
          pokemonDetails,
          modal: true
        });
      })

      .catch(error => {
        this.setState({
            error: error.message,
        });
      });
  }

  handleCloseModal() {
    this.setState({modal: false})
  }

  render () {
    let cards = this.displayPokemonCards();
    let loadMoreButton = !this.state.shouldInfiniteScroll ?
      this.renderLoadButton() : null;
    let error = this.state.error ? <LoadingError error={this.state.error} /> : null;

    return (
      <div className="main" align="center">
        <PokemonModal
          handleCloseModal={this.handleCloseModal}
          modal={this.state.modal}
          getPokemonDetails={this.getDetails}
          data={this.state.pokemonDetails}
        />
        <Header />
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={this.fetchPokemon.bind(this)}
          hasMore={this.state.shouldInfiniteScroll || this.state.initialLoad}
          loader={<Loader key="loader" />}
        >
          <div className="card-container">
            {cards}
          </div>
        </InfiniteScroll>
        {loadMoreButton}
        {error}
      </div>
    )
  }
}

export default Home;
