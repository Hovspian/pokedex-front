import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Button } from 'reactstrap';

import { getRangeOfPokemon } from './PokemonAPI';
import Header from './Header';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
import LoadingError from './LoadingError';

import '../styles/Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      hasMore: true,
      error: '',
      shouldInfiniteScroll: false,
    };
    this.perPage = 20;

    this.enableInfiniteScroll = this.enableInfiniteScroll.bind(this);
  }

  componentDidMount() {
    this.fetchPokemon(1, this.perPage);
  }

  fetchPokemon(page) {
    if (this.state.error)
        return;

    const id = (page - 1) * this.perPage + 1;
    let range;
    if (page === 41) {
      this.setState({hasMore: false})
      range = 6
    } else {
      range = this.perPage;
    }
    getRangeOfPokemon(id, range)
      .then(newPokemon => {
        const oldPokemon = this.state.pokemon.slice();
        this.setState({
          pokemon: [...oldPokemon, ...newPokemon],
        });
      })

      .catch(error => {
        this.setState({
            error: error,
            hasMore: false,
        });
      });
  }

  displayPokemonCards () {
    return this.state.pokemon.map(pokemon => {
      return <PokemonCard {...pokemon} key={pokemon.id} />
    });
  }

  renderLoadButton () {
    return (
      <div>
        <Button color="primary" size="lg" onClick={this.enableInfiniteScroll}> Load more Pokemon </Button>
      </div>
    );
  }

  enableInfiniteScroll (evt) {
    evt.preventDefault();
    this.setState({ shouldInfiniteScroll: true });
  }

  render () {
    let cards = this.displayPokemonCards();
    return (
      <div className="main">
        <Header />
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={this.fetchPokemon.bind(this)}
          hasMore={this.state.hasMore && this.state.shouldInfiniteScroll}
          loader={<Loader key="loader" />}
          align="center"
        >
          <div className="card-container">
            {cards}
          </div>
          {this.state.hasMore && !this.state.shouldInfiniteScroll && !this.state.error ? this.renderLoadButton() : null}
          {this.state.error ? <LoadingError error={this.state.error} /> : null}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Home;
