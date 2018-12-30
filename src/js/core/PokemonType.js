import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Popover, PopoverBody } from 'reactstrap';

import { TYPE_LOOKUP } from '../core/Constants';
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
  isCheckbox: PropTypes.bool,
  toggleType: PropTypes.func,
  isWeakness: PropTypes.bool,
  isLarge: PropTypes.bool,
  checkedTypes: PropTypes.arrayOf(PropTypes.bool)
};

class PokemonType extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  /**
   * Returns an element for the weakness with a popover if the multiplier is extra strong.
   * A multiplier is normally 2x
   *
   * @param {Object} weakness - the weakness being rendered
   * @param {String} weakness.type - the weakness's name
   * @param {String} weakness.multiplier - the weakness's multiplier
   */
  renderWithHover(weakness) {
    const multiplier = parseFloat(weakness.multiplier);
    if (multiplier > 2) {
      return (
        <span>
          {weakness.type}
          <span className="extra-damage"
                id={`extra-damage-${weakness.type}`}
                onMouseOver={this.toggleHover}
                onMouseOut={this.toggleHover}
          >
            *
          </span>
          <Popover placement="top"
                   isOpen={this.state.isOpen}
                   target={`extra-damage-${weakness.type}`}
                   hideArrow={true}
          >
            <PopoverBody>Deals {multiplier}x damage</PopoverBody>
          </Popover>
        </span>
      );
    } else {
      return <span>{weakness.type}</span>;
    }
  }

  shouldRenderChecked(checked, typeName) {
    if (!checked || !checked[TYPE_LOOKUP[typeName] - 1]) {
      return '';
    } else {
      return ' checked';
    }
  }

  shouldToggle(typeName) {
    if (this.props.isCheckbox) {
      this.props.toggleType(TYPE_LOOKUP[typeName] - 1, this.props.isWeakness);
    }
  }

  renderType(isLarge, isWeakness, type) {
    if (isLarge && isWeakness) {
      return (
        <h4>{this.renderWithHover(type)}</h4>
      );
    } else if (isLarge) {
      return (
        <h4>{type}</h4>
      );
    } else {
      return (
        <span>{type}</span>
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.types.map((type, index) => {
          const typeName = this.props.isWeakness ? type.type : type;
          const typeClass = this.props.isLarge ? ' large-type' : '';
          const typeCheckbox = this.props.isCheckbox ? ' checkbox' : '';
          const typeChecked = this.shouldRenderChecked(this.props.checkedTypes, typeName);
          return (
            <Badge className={`type ${typeName}${typeClass}${typeCheckbox}${typeChecked}`}
                   key={typeName + index}
                   onClick={() => {this.shouldToggle(typeName)}}
                   pill
            >
              {this.renderType(this.props.isLarge, this.props.isWeakness, type)}
            </Badge>
          );
        })}
      </div>
    );
  }
}

PokemonType.propTypes = propTypes;

export default PokemonType;
