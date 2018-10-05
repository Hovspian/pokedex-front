import React, { Component } from 'react';
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import NoPokemon from '../NoPokemon';
import { getRangeOfPokemon } from '../PokemonAPI';

import '../../styles/components/Home/Home.css'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    this.fetchPokemon(1, 20);
  }

  fetchPokemon(id, range) {
    getRangeOfPokemon(id, range)
      .then(newPokemon => {
        const oldPokemon = this.state.pokemon.slice();
        this.setState({
          pokemon: [...oldPokemon, ...newPokemon]
        });
      })

      // TODO: Need to do something if error on fetch from server
      .catch(error => {
        window.console.log('Unable to fetch Pokeon data from server with error: ' + error);
      });
  }

  displayPokemonCards() {
    if (this.state.pokemon.length === 0) {
      return <NoPokemon />
    }
    return this.state.pokemon.map(pokemon => {
      return <PokemonCard {...pokemon} key={pokemon.id} />
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="cardContainer">
          {this.displayPokemonCards()}
        </div>
      </div>
    )
  }
}

export default Home;