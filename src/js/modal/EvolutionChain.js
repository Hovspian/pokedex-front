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
      return <Evolution key={index}
                        getPokemonDetails={this.props.getPokemonDetails}
                        {...evolution}
             />;
    });
  }

  renderEvolutions() {
    const firstGroup = this.props.evolutions[1] === null ? null :
      <div className="evolution-chain-item first">
        {this.mapArrayToEvolutions(this.props.evolutions[1])}
      </div>;
    const secondGroup = this.props.evolutions[2] === null ? null :
      <div className="evolution-chain-item second">
        {this.mapArrayToEvolutions(this.props.evolutions[2])}
      </div>;
    const thirdGroup = this.props.evolutions[3] === null ? null :
      <div className="evolution-chain-item third">
        {this.mapArrayToEvolutions(this.props.evolutions[3])}
      </div>;

    return (
      <div className="evolution-chain-container">
        {firstGroup}
        {secondGroup}
        {thirdGroup}
      </div>
    );
  }

  render () {
    return (
      <div className="evolution-chain-background">
        <h3>{this.props.evolutions[1] ? 'Evolutions' : 'This pokémon doesn\'t evolve'}</h3>
        {this.props.evolutions[1] ? this.renderEvolutions() : null}
      </div>
    );
  }
}

EvolutionChain.propTypes = propTypes;

export default EvolutionChain;
