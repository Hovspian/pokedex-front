import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/modal/Abilities.css';

const propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      hidden: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

class Abilities extends React.Component {
  render () {
    const abilityElements = this.props.abilities.map((ability, index) => { return (
      <span key={`container-${ability.name}`}>
        <span className="ability" >
          {`${ability.name}${index < this.props.abilities.length - 1 ? ', ' : ''}`}
          <span className="ability-tooltip"> {ability.description} </span>
        </span>
      </span>
    )});

    return (
      <h4>
        {'Abilities: '}
        {abilityElements}
      </h4>
    );
  }
}

Abilities.propTypes = propTypes;

export default Abilities;
