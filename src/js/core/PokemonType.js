import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

import '../../styles/core/PokemonType.css';

const propTypes = {
  types: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        multiplier: PropTypes.string
      }))
  ]).isRequired,
  isWeakness: PropTypes.bool.isRequired,
  isModal: PropTypes.bool.isRequired,
};

class PokemonType extends React.Component {

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

  renderType(isModal, isWeakness, type) {
    if (isModal && isWeakness) {
      return (
        <h3>{type.type}{this.shouldRenderHoverOver(type)}</h3>
      )
    } else if (isModal) {
      return (
        <h3>{type}</h3>
      )
    } else {
      return (
        <span>{type}</span>
      )
    }
  }

  render() {
    const self = this;
    return (
      <div>
        {this.props.types.map((type, index) => {
          const typeName = self.props.isWeakness ? type.type : type;
          const typeClass = self.props.isModal ? ' modal-type' : '';
          return (
            <Badge className={`type ${typeName}${typeClass}`} key={index} color="primary" pill>
              {self.renderType(self.props.isModal, self.props.isWeakness, type)}
            </Badge>
          )
        })}
      </div>
    );
  }
}

PokemonType.propTypes = propTypes;

export default PokemonType;
