import React, { Component } from 'react';

import { getRangeOfPokemon } from './PokemonAPI.js';
import Header from './Header.js';
import PokemonCard from './PokemonCard.js';
import NoPokemon from './NoPokemon.js';

import '../styles/Home.css'

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
