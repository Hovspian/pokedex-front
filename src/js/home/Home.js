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
import Search from './Search';
import EmptySearch from './EmptySearch';

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
      selectedForm: 0,
    };
    this.perPage = 20;

    this.getDetails = this.getDetails.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.enableInfiniteScroll = this.enableInfiniteScroll.bind(this);
    this.selectForm = this.selectForm.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  /**
   * Fetches a range of pokemon from the server based on search criteria.
   * Does some validation and parses Types arrays for checked types
   * if appendPokemon, then append results to current state, else replace
   * @param  {Object} options - search options to be fetched
   * @param  {boolean} appendPokemon - should append results
   * @return {void}
   */
  fetchPokemon(options, appendPokemon) {
    if (this.state.error || !options) {
      return;
    }

    const searchOptions = {};

    // pushes index + 1 because Type array starts at 0
    // but first Type in lookup is 1 (Normal)
    if (options.hasOwnProperty('selectedTypes')) {
      const searchTypes = [];
      options.selectedTypes.forEach((isChecked, index) => {
        if (isChecked) {
          searchTypes.push(index + 1);
        }
      });
      if (searchTypes.length > 0) {
        searchOptions.types = searchTypes;
      }
    }

    // pushes index + 1 because Type array starts at 0
    // but first Type in lookup is 1 (Normal)
    if (options.hasOwnProperty('selectedWeaknesses')) {
      const searchWeaknesses = [];
      options.selectedWeaknesses.forEach((isChecked, index) => {
        if (isChecked) {
          searchWeaknesses.push(index + 1);
        }
      });
      if (searchWeaknesses.length > 0) {
        searchOptions.weaknesses = searchWeaknesses;
      }
    }

    if (options.rangeStart && options.rangeEnd) {
      searchOptions.id = options.rangeStart;
      searchOptions.range = options.rangeEnd - options.rangeStart + 1;
    }

    if (options.abilityName) {
      searchOptions.ability = options.abilityName;
    }

    // idOrName can be a string (Name) or number (ID)
    if (options.idOrName) {
      if (isNaN(options.idOrName)) {
        searchOptions.name = options.idOrName;
      } else {
        const id = parseInt(options.idOrName, 10);

        // if searching by an ID, but does not fall into the
        // range, then return empty search result
        if (id < options.rangeStart || id > options.rangeEnd) {
          this.setEmptySearch();
          return;
        }
        searchOptions.id = options.idOrName;
        searchOptions.range = 1;
      }
    }

    // if no valid search params, then just return empty search;
    if (Object.keys(searchOptions).length < 1) {
      this.setEmptySearch();
      return;
    }

    return getRangeOfPokemon(searchOptions)
      .then(newPokemon => {
        if (appendPokemon) {
          const oldPokemon = [...this.state.pokemon];
          const hasMore = searchOptions.id + searchOptions.range < MAX_POKEMON ? true : false;
          this.setState({
            pokemon: [...oldPokemon, ...newPokemon],
            initialLoad: false,
            hasMore: hasMore,
          });
        } else {
          this.setState({
            pokemon: newPokemon,
            initialLoad: false,
            hasMore: false,
            shouldInfiniteScroll: false,
          });
        }
      })
      .catch(error => {
        this.setState({
          error: error.message,
          shouldInfiniteScroll: false,
        });
      });
  }

  setEmptySearch() {
    this.setState({
      pokemon: [],
      initialLoad: false,
      hasMore: false,
      shouldInfiniteScroll: false,
    });
  }

  fetchStandardRange() {
    // returns early if does not have more to fetch
    // InfiniteScroll wants to pull one last time
    // if have scroll enabled with an empty search
    if (!this.state.hasMore) {
      return;
    }

    const rangeStart = this.state.pokemon.length + 1;
    let rangeEnd;
    if (rangeStart + this.perPage > MAX_POKEMON) {
      this.setState({ shouldInfiniteScroll: false })
      rangeEnd = MAX_POKEMON;
    } else {
      rangeEnd = rangeStart + this.perPage - 1;
    }

    this.fetchPokemon({ rangeStart, rangeEnd }, true);
  }

  displayPokemonCards() {
    return this.state.pokemon.map(pokemon => {
      return <PokemonCard {...pokemon} key={pokemon.id} handlePokemonCardClick={this.getDetails} />
    });
  }

  renderLoadButton() {
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
          Load more Pokémon
        </Button>
      </div>
    ) : null;
  }

  enableInfiniteScroll() {
    this.setState({ shouldInfiniteScroll: true });
  }

  clearError() {
    this.setState({ error: '' });
  }

  /**
  * Fetches a pokemon details from server and adds them to the current state
  * @param  {int} id - the id of the pokemon to fetch
  * @return {void}
  */
  getDetails(id) {
    if (this.state.error ||
       id < 1 ||
       id > 807)
      return;

    if (this.state.pokemonDetails && this.state.pokemonDetails.id === id) {
      this.setState({
        modal: true,
        selectedForm: 0,
      });
      return;
    }

    return getPokemonDetails(id)
      .then(pokemonDetails => {
        this.setState({
          pokemonDetails,
          modal: true,
          selectedForm: 0,
        });
      })

      .catch(error => {
        this.setState({
          error: error.message,
        });
      });
  }

  selectForm(index) {
    if (!this.state.pokemonDetails || index >= this.state.pokemonDetails.forms.length || index < 0)
      return;
    this.setState({ selectedForm: index });
  }

  handleCloseModal() {
    this.setState({ modal: false })
  }

  render() {
    let cards = this.displayPokemonCards();
    let loadMoreButton = !this.state.shouldInfiniteScroll ?
      this.renderLoadButton() : null;
    let error = this.state.error ? <LoadingError error={this.state.error} /> : null;
    let emptySearch = (this.state.pokemon.length === 0 && !this.state.initialLoad) ? <EmptySearch /> : null;

    return (
      <div className="main" align="center">
        <PokemonModal
          handleCloseModal={this.handleCloseModal}
          modal={this.state.modal}
          getPokemonDetails={this.getDetails}
          data={this.state.pokemonDetails}
          selectForm={(index) => { this.selectForm(index) }}
          selectedForm={this.state.selectedForm}
        />
        <Header />
        <Search fetchPokemon={this.fetchPokemon} />
        <InfiniteScroll
          initialLoad={this.state.initialLoad}
          pageStart={0}
          loadMore={this.fetchStandardRange.bind(this)}
          hasMore={this.state.shouldInfiniteScroll || this.state.initialLoad}
          loader={<Loader key="loader" />}
        >
          <div className="card-container">
            {cards}
          </div>
        </InfiniteScroll>
        {loadMoreButton}
        {emptySearch}
        {error}
      </div>
    )
  }
}

export default Home;
