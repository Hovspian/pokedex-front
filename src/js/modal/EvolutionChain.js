import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
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
    return null;
  }
}

EvolutionChain.propTypes = propTypes;

export default EvolutionChain;
