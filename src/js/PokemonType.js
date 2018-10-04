import React from 'react';
import '../styles/PokemonType.css';
import {Badge} from 'reactstrap';

class PokemonType extends React.Component {
    render () {
        const self = this;
        return (
            <div>
                {this.props.types.map(function(type) {
                    return <Badge className={'type ' + type} key={self.props.id + '-' + type} color="primary" pill>{type}</Badge>
                })}
            </div>
        );
    }
}

export default PokemonType
