import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/modal/Stat.css'

const propTypes = {
  statAmount: PropTypes.number.isRequired,
};

class Stat extends React.Component {

  calculateHeight() {
    const minHeight = 30;
    const maxHeight = 200;
    let height = Math.max(minHeight, this.props.statAmount);
    return Math.min(height, maxHeight);
  }

  render() {
    return (
      <div className="stat" style={{ "height": `${this.calculateHeight()}px` }}><span className="amount">{this.props.statAmount}</span></div>
    )
  }
}

Stat.propTypes = propTypes

export default Stat;
