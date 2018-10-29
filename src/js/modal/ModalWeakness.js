import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

import '../../styles/core/PokemonType.css';
import '../../styles/modal/ModalType.css';

const propTypes = {
  weaknesses: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      multiplier: PropTypes.string
    })
  ).isRequired
};

class ModalWeakness extends React.Component {

  shouldRenderHoverOver(weakness) {
    const multiplier = Number.parseFloat(weakness.multiplier);
    if (multiplier > 2) {
      return (
        <span>
          <span className="extra-damage">*
            <span className="extra-damage-tooltip">Deals {multiplier}x damage</span>
          </span>
        </span>
      )
    }
  }

  render() {
    const self = this;
    return (
      <div>
        {this.props.weaknesses && this.props.weaknesses.map((weakness,index) => {
          return <Badge className={`type ${weakness.type} modal-type`} key={`${index}-${weakness.type}`} color="primary" pill>
            <h3>{weakness.type}{self.shouldRenderHoverOver(weakness)}</h3>
          </Badge>
        })}
      </div>
    );
  }
}

ModalWeakness.propTypes = propTypes;

export default ModalWeakness;