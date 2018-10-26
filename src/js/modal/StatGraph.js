import React from 'react';
import Stat from './Stat';

import '../../styles/modal/StatGraph.css'

class Stat extends React.Component {
  
  render() {
    return (
      <div className="statcontainer">
        <div><p>Stats</p></div>
        <div className="statgraph">
          {Object.keys(props.stats).map((stat, index) => {
            return <Stat key={index} statAmount={props.stats[stat]} />
          })}
        </div>
        <div className="statnames">
          <p className="statname">Hp</p>
          <p className="statname">Attack</p>
          <p className="statname">Defense</p>
          <p className="statname">Special Aattack</p>
          <p className="statname">Special Defense</p>
          <p className="statname">Speed</p>
        </div>
      </div>
    )
  }
};

export default StatGraph;