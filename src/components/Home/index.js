import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Header from '../Header';
import PokemonCard from '../PokemonCard';
import NoPokemon from '../NoPokemon';
import { getRangeOfPokemon } from '../PokemonAPI';

import '../../styles/components/Home/Home.css'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: [],
      hasMore: true
    }
  }


  fetchPokemon(page) {
    const id = (page - 1) * 20 + 1;
    let range;
    if (page === 41) {
      this.setState({hasMore: false})
      range = 6
    } else {
      range = 20;
    }
    getRangeOfPokemon(id, range)
      .then(newPokemon => {
        const oldPokemon = this.state.pokemon.slice();
        this.setState({
          pokemon: [...oldPokemon, ...newPokemon],
        });
      })

      // TODO: Need to do something if error on fetch from server
      .catch(error => {
        window.console.log(error);
      });
  }

  displayPokemonCards() {
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
          initialLoad={true}
          pageStart={0}
          loadMore={this.fetchPokemon.bind(this)}
          hasMore={this.state.hasMore}
          loader={<NoPokemon key={0} />}
        >
          <div className="cardContainer">
            {cards}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default Home;