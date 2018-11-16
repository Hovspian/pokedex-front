import React from 'react';
import PropTypes from 'prop-types';

import PokemonType from '../core/PokemonType';
import { getPokemonSprite } from '../core/PokemonAPI';

import '../../styles/home/PokemonCard.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  image_path: PropTypes.string.isRequired,
  handlePokemonCardClick: PropTypes.func.isRequired
};

class PokemonCard extends React.Component {

  render () {
    return (
      <div className='card' onClick={() => {this.props.handlePokemonCardClick(this.props.id)}} >
        <img className="card-sprite" src={getPokemonSprite(this.props.image_path)} alt={`${this.props.name} sprite`} />
        <div className="textarea" align="center" >
          <h5 className="pokemon-id" align="left">{`#${this.props.id}`}</h5>
          <h3><b>{this.props.name}</b></h3>
          <PokemonType isModal={false} isWeakness={false} id={this.props.id} types= {this.props.types} />
        </div>
      </div>
    );
  }
}

PokemonCard.propTypes = propTypes;

export default PokemonCard;
