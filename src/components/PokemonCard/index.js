import React from 'react';
import PokemonType from '../PokemonType';
import '../../styles/components/PokemonCard/PokemonCard.css';

const baseURL = 'https://pokedex-backend-server.herokuapp.com';

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
            capitalizedLetter = name.charAt(i).toUpperCase();
            capitalizedName = capitalizedName.slice(0, i) + capitalizedLetter + capitalizedName.slice(i + 1);
            i = name.substring(i).search(/[- ]/);
        }

        return capitalizedName;
    }

    render () {
        return (
            <div className='card' >
                <img src={baseURL + this.props.image_path.large} alt={this.props.name + ' sprite'} />
                <div className="textarea" align="center" >
                    <h5 className="pokemon-id" align="left">{'#' + this.props.id}</h5>
                    <h3><b>{this.capitalizeName(this.props.name)}</b></h3>
                    <PokemonType id={this.props.id} types= {this.props.types} />
                </div>
            </div>
        );
    }
}

export default PokemonCard;
