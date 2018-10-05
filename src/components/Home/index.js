import React, { Component } from 'react';
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import NoPokemon from '../NoPokemon';
import { getRangeOfPokemon } from '../PokemonAPI';

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
      window.console.log(error);
    });
  }

  displayPokemonCards() {
    if (this.state.pokemon.length === 0) {
      return <NoPokemon />
    }
    return this.state.pokemon.map(pokemon => {
       return <PokemonCard {...pokemon} key={pokemon.id}/>
    });
  }

  render() {
    return (
      <div>
        <Header />
        { this.displayPokemonCards()}
      </div>
    )
  }
}

export default Home;