import React from 'react';
import PropTypes from 'prop-types';

import { getPokemonSprite } from '../core/PokemonAPI';

import '../../styles/modal/Form.css';

const propTypes = {
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image_path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class Form extends React.Component {
  render () {
    return (
      <div className={`form ${this.props.selected ? 'selected' : ''}`}
           onClick={() => { this.props.onClick() }}
      >
        <img className="sprite"
             src={getPokemonSprite(this.props.image_path)}
             alt={`${this.props.name}-alt`}
        />
      </div>
    );
  }

}

Form.propTypes = propTypes;

export default Form;
