import React from 'react';
import PropTypes from 'prop-types';
import ModalTypes from './ModalTypes';
import ModalWeakness from './ModalWeakness';

import '../../styles/modal/TypeContainer.css'

const propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  weaknesses: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      multiplier: PropTypes.string
    })
  ).isRequired
};

class TypeContainer extends React.Component {
  render() {
    return (
      <div className="type-container">
        <h3>Type</h3>
        <ModalTypes types={this.props.types} />
        <h3>Weakness</h3>
        <ModalWeakness weaknesses={this.props.weaknesses} />
      </div>
    )
  }
}

TypeContainer.propTypes = propTypes;

export default TypeContainer;

