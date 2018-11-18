import React from 'react';
import PropTypes from 'prop-types';

import Evolution from './Evolution';

const propTypes = {
  getPokemonDetails: PropTypes.func.isRequired,
  evolutions: PropTypes.shape({
    1: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        image_path: PropTypes.string.isRequired,
      }).isRequired
    ),
    2: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        image_path: PropTypes.string.isRequired,
      }).isRequired
    ),
    3: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        image_path: PropTypes.string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

class EvolutionChain extends React.Component {
  render () {
    if (this.props.evolutions[1] === null)
      return <h3>This pokemon doesn't evolve</h3>;
    const evolution = <Evolution getPokemonDetails={this.props.getPokemonDetails} {...this.props.evolutions[1][0]} />
    return (
      <div>
        <h3>Evolutions</h3>
        {evolution}
      </div>
    );
  }
}

EvolutionChain.propTypes = propTypes;

export default EvolutionChain;
