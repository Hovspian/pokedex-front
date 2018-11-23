import React from 'react';
import PropTypes from 'prop-types';

import { getPokemonSprite } from '../core/PokemonAPI';
import PokemonType from '../core/PokemonType';

import '../../styles/modal/Evolution.css';

const propTypes = {
  getPokemonDetails: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  image_path: PropTypes.string.isRequired,
};

class Evolution extends React.Component {
  render () {
    return (
      <span className="evolution-container" onClick={() => { this.props.getPokemonDetails(this.props.id) }} >
        <div className="evolution">
          <img className="evolution-sprite"
               src={getPokemonSprite(this.props.image_path)}
               alt={this.props.name}
          />
        </div>
        <h5><b>{this.props.name}</b></h5>
        <PokemonType isModal={false} isWeakness={false} types={this.props.types} />
      </span>
    );
  }
}

Evolution.propTypes = propTypes;

export default Evolution;
