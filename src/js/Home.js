import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { getRangeOfPokemon } from './PokemonAPI';
import Header from './Header';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
import LoadingError from './LoadingError';

import '../styles/Home.css';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      pokemon: [],
      hasMore: true,
      error: false,
      shouldInfiniteScroll: false,
    };

    this.perPage = 20;
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

  render() {
    let cards = this.displayPokemonCards();
    return (
      <div>
        <Header />
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={this.fetchPokemon.bind(this)}
          hasMore={this.state.hasMore}
          loader={<Loader key="loader" />}
          align="center"
        >
          <div className="card-container">
            {cards}
            {this.state.error ? <LoadingError error={this.state.error} /> : null}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default Home;
