import React from 'react';
import '../styles/PokemonCard.css';
import GyaradosJPG from '../local_data/130.jpg';

class PokemonCard extends React.Component {
    render () {
        return (
            <div className='card' >
                <img src={GyaradosJPG /*this.props.image_path.large*/} alt={this.props.name + ' Sprite'} />
                <div className="container">
                    <h4><b>{this.props.name}</b></h4>
                    <p>{this.props.types}</p>
                </div>
            </div>
        );
    }
}

export default PokemonCard
