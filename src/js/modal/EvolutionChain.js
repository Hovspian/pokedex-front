import React from 'react';
import PropTypes from 'prop-types';

import Evolution from './Evolution';

import '../../styles/modal/EvolutionChain.css';

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
  mapArrayToEvolutions(arr) {
    return arr.map((evolution, index) => {
      return <Evolution getPokemonDetails={this.props.getPokemonDetails} {...arr[index]} key={index} />;
    });
  }

  renderEvolutions() {
    const firstGroup = this.props.evolutions[1] === null ? null :  this.mapArrayToEvolutions(this.props.evolutions[1]);
    const secondGroup = this.props.evolutions[2] === null ? null : this.mapArrayToEvolutions(this.props.evolutions[2]);
    const thirdGroup = this.props.evolutions[3] === null ? null : this.mapArrayToEvolutions(this.props.evolutions[3]);
    return (
      <ul>
        <li className="evolution-chain-item">{firstGroup}</li>
        <li className="evolution-chain-item">{secondGroup}</li>
        <li className="evolution-chain-item">{thirdGroup}</li>
      </ul>
    );
  }

  render () {
    if (this.props.evolutions[1] === null)
      return <h3>This pokemon doesn't evolve</h3>;

    return (
      <div>
        <h3>Evolutions</h3>
        {this.renderEvolutions()}
      </div>
    );
  }
}

EvolutionChain.propTypes = propTypes;

export default EvolutionChain;
