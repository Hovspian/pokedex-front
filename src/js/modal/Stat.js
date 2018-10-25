import React from 'react';

import '../../styles/modal/Stat.css'

const Stat = (props) => (
  <div className="stat" style={{"height": `${props.statAmount}px`}}>{props.statAmount}</div>
);

export default Stat;