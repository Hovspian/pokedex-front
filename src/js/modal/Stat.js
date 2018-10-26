import React from 'react';

import '../../styles/modal/Stat.css'

class Stat extends React.Component {

  render() {
    return (
      <div className="stat" style={{ "height": `${this.props.statAmount}px` }}>{this.props.statAmount}</div>
    )
  }
};

export default Stat;