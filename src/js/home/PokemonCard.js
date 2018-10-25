import React from 'react';
import PropTypes from 'prop-types';

import PokemonType from '../core/PokemonType';
import { getPokemonSprite } from '../core/PokemonAPI';

import '../../styles/home/PokemonCard.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  image_path: PropTypes.string.isRequired,
  handlePokemonCardClick: PropTypes.func.isRequired
};

class PokemonCard extends React.Component {

  /**
   * Capitalizes a name.
   * The first letter should be capitalized, as well as any letter following a space or dash
   * @param  {String} name - the name to capitalize
   * @return {String} - the capitalized name
   */
  capitalizeName (name) {
    // Capitalize first letter
    let capitalizedLetter = name.charAt(0).toUpperCase();
    let capitalizedName = capitalizedLetter + name.slice(1);

    // Capitalize other letters that should be capitalized.
    let i = capitalizedName.search(/[- ]/);
    while (i > -1) {
      capitalizedLetter = capitalizedName.charAt(i + 1).toUpperCase();
      capitalizedName = capitalizedName.slice(0, i + 1) + capitalizedLetter + capitalizedName.slice(i + 2);

      let next = capitalizedName.substring(i + 1).search(/[- ]/);
      i = next > -1 ? i + 1 + next : -1;
    }

    return capitalizedName;
  }

  render () {
    return (
      <div className='card' onClick={() => {this.props.handlePokemonCardClick(this.props.id)}} >
        <img src={getPokemonSprite(this.props.image_path)} alt={`${this.props.name} sprite`} />
        <div className="textarea" align="center" >
          <h5 className="pokemon-id" align="left">{`#${this.props.id}`}</h5>
          <h3><b>{this.capitalizeName(this.props.name)}</b></h3>
          <PokemonType id={this.props.id} types= {this.props.types} />
        </div>
      </div>
    );
  }
}

PokemonCard.propTypes = propTypes;

export default PokemonCard;
