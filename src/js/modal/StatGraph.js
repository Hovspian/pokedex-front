import React from 'react';
import Stat from './Stat';
import PropTypes from 'prop-types';

import '../../styles/modal/StatGraph.css'

const propTypes = {
  stats: PropTypes.shape({
    hp: PropTypes.number,
    attack: PropTypes.number,
    defense: PropTypes.number,
    'special-attack': PropTypes.number,
    'special-defense': PropTypes.number,
    speed: PropTypes.number,
  }).isRequired,
};

class StatGraph extends React.Component {
  render() {
    return (
      <div className="statcontainer">
        <div><h3 className="stattitle">Stats</h3></div>
        <div className="statgraph">
          <Stat statAmount={this.props.stats['hp']} />
          <Stat statAmount={this.props.stats['attack']} />
          <Stat statAmount={this.props.stats['defense']} />
          <Stat statAmount={this.props.stats['special-attack']} />
          <Stat statAmount={this.props.stats['special-defense']} />
          <Stat statAmount={this.props.stats['speed']} />
        </div>
        <div className="statnames">
          <p className="statname">Hp</p>
          <p className="statname">Attack</p>
          <p className="statname">Defense</p>
          <p className="statname">Special Attack</p>
          <p className="statname">Special Defense</p>
          <p className="statname">Speed</p>
        </div>
      </div>
    );
  }
}

StatGraph.propTypes = propTypes

export default StatGraph;
