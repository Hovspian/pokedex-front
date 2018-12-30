import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/modal/Stat.css'

const propTypes = {
  statAmount: PropTypes.number.isRequired,
};

class Stat extends React.Component {
  render() {
    return (
      <div className="stat" style={{ "height": `${this.props.statAmount}px` }}>
        <span className="amount">{this.props.statAmount}</span>
      </div>
    );
  }
}

Stat.propTypes = propTypes

export default Stat;
