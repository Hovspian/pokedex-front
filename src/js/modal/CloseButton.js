import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/modal/CloseButton.css';

const propTypes = {
  close: PropTypes.func.isRequired,
};

class CloseButton extends React.Component {
  render () {
    return <button className="close close-button" onClick={this.props.close}>&times;</button>
  }
}

CloseButton.propTypes = propTypes;

export default CloseButton;
