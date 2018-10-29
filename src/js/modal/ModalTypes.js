import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

import '../../styles/core/PokemonType.css';
import '../../styles/modal/ModalType.css';

const propTypes = {
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class ModalTypes extends React.Component {
  render () {
    return (
      <div>
        {this.props.types.map((type, index) => {
          return <Badge className={`type ${type} modal-type`} key={`${index}-${type}`} color="primary" pill><h3>{type}</h3></Badge>
        })}
      </div>
    );
  }
}

ModalTypes.propTypes = propTypes;

export default ModalTypes;
