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
    const abilityElements = this.props.abilities.map((ability, index) => { return  ability.hidden ? null : (
      <span key={`container-${ability.name}`}>
        {index > 0 ? ', ' : ''}
        <span className="ability">
          {ability.name}
          <span className="ability-tooltip">{ability.description}</span>
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
