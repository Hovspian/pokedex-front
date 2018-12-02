import React from 'react';
import PropTypes from 'prop-types';

import Abilities from './Abilities';

import '../../styles/modal/BasicInfo.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      hidden: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

class BasicInfo extends React.Component {
  /**
   * Prepends the id with zeroes to make all ids have 3 digits
   * @returns {string} - the 3 digit id
   */
  idWithZeros() {
    let id = this.props.id;
    if (id < 10) {
      return `00${id}`;
    }
    else if (id < 100) {
      return `0${id}`;
    }
    return id.toString();
  }

  render () {
    return (
      <div className="basic-info">
        <div className="text-container">
          <h1>{`${this.idWithZeros()} ${this.props.name}`}</h1>
          <h3>{`${this.props.species} Pokémon`}</h3>
          <br />
          <h4>{this.props.description}</h4>
          <br />
          <Abilities abilities={this.props.abilities} />
        </div>
      </div>
    )
  }
}

BasicInfo.propTypes = propTypes;

export default BasicInfo;
