import React, { Component } from 'react';
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import LocalJSON from '../../local_data/example_single.json';


class Home extends Component {

  constructor() {
    super();

  }

  componentDidMount() {
    this.fetchPokemon()
  }

  fetchPokemon() {

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