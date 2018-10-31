import React from 'react';
import PropTypes from 'prop-types';

import { getPokemonSprite } from '../core/PokemonAPI';

import '../../styles/modal/Sprite.css';
import '../../styles/core/PokemonType.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  image_path: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class Sprite extends React.Component {
  render () {
    const inner = (
      <img className="modal-sprite" src={getPokemonSprite(this.props.image_path)} alt={`${this.props.name} sprite`} />
    );

    return (
      <div className={this.props.className}>
        <div className={`sprite-border primary ${this.props.types[0]}-border`}>
          {this.props.types[1] ?
            <div className={`sprite-border secondary ${this.props.types[1]}-border`}>
              {inner}
            </div>
          : <div className="single-type-img" > {inner} </div>}
        </div>
        <h2> {this.props.name} </h2>
      </div>
    );
  }

}

Sprite.propTypes = propTypes;

export default Sprite;
