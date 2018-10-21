import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

import '../../styles/core/PokemonType.css';

const propTypes = {
    id: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class PokemonType extends React.Component {
  render () {
    const self = this;
    return (
      <div>
        {this.props.types.map(function(type) {
          return <Badge className={`type ${type}`} key={`${self.props.id}-${type}`} color="primary" pill>{type}</Badge>
        })}
      </div>
    );
  }
}

PokemonType.propTypes = propTypes;

export default PokemonType;
