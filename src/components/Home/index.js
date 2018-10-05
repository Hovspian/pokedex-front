import React, { Component } from 'react';
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import LocalJSON from '../../local_data/example_single.json';
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

  render() {
    return (
      <div>
        <Header />
        <PokemonCard {...LocalJSON} />
      </div>
    )
  }
}

export default Home;