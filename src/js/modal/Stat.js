import React from 'react';

import '../../styles/modal/Stat.css'

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
};

export default Stat;