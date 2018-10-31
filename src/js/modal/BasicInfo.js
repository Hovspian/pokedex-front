import React from 'react';
import PropTypes from 'prop-types';

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
    }).isRequired,
  ).isRequired,
};

class BasicInfo extends React.Component {
  render () {
    return (
      <div className={`${this.props.className} basic-info`}>
        <p>Will need to be edited.</p>
        <p>Id: {this.props.id}</p>
        <p>Name: {this.props.name}</p>
        <p>Description: {this.props.description}</p>
        <p>Species: {this.props.species}</p>
      </div>
    )
  }

}

BasicInfo.propTypes = propTypes;

export default BasicInfo;
