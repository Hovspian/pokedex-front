import React from 'react';

import PokemonType from './PokemonType.js';

import '../styles/PokemonCard.css';
import Sprite from '../local_data/130.jpg';

class PokemonCard extends React.Component {
    render () {
        return (
            <div className='card' >
                <img src={Sprite /*'https://pokedex-backend-server.herokuapp.com/sprites/pokemon/small/130.png' this.props.image_path.small*/} alt={this.props.name + ' Sprite'} />
                <div>
                    <h4><b>{this.props.name}</b></h4>
                    <PokemonType id={this.props.id} types= {this.props.types} />
                </div>
            </div>
        );
    }
}

export default PokemonCard
