import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';

import AlternateForms from './AlternateForms';
import BasicInfo from './BasicInfo';
import NavigationBar from './NavigationBar';
import StatGraph from './StatGraph';
import TypeContainer from './TypeContainer';
import CloseButton from './CloseButton';
import Sprite from './Sprite';

import '../../styles/modal/PokemonModal.css';

const propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  getPokemonDetails: PropTypes.func.isRequired,
  data: PropTypes.shape({
    previous: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    next: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    forms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        weaknesses: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.string.isRequired,
            multiplier: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
        abilities: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            hidden: PropTypes.bool.isRequired,
          }).isRequired
        ).isRequired,
        stats: PropTypes.shape({
          hp: PropTypes.number.isRequired,
          attack: PropTypes.number.isRequired,
          defense: PropTypes.number.isRequired,
          'special-attack': PropTypes.number.isRequired,
          'special-defense': PropTypes.number.isRequired,
          speed: PropTypes.number.isRequired,
        }).isRequired,
        image_path: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    evolutions: PropTypes.shape({
      1: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          types: PropTypes.arrayOf(PropTypes.string).isRequired,
          image_path: PropTypes.string.isRequired,
        }).isRequired
      ),
      2: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          types: PropTypes.arrayOf(PropTypes.string).isRequired,
          image_path: PropTypes.string.isRequired,
        }).isRequired
      ),
      3: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          types: PropTypes.arrayOf(PropTypes.string).isRequired,
          image_path: PropTypes.string.isRequired,
        }).isRequired
      ),
    }).isRequired,
  }),
}

class PokemonModal extends React.Component {

  render() {
    if (!this.props.modal || !this.props.data)
      return null;

    const alternateForms = this.props.data.forms.map((form) => { return {
      name: form.name,
      image_path: form.image_path,
    }});

    return (
      <Modal isOpen={this.props.modal} className="pokemodal" align="center" external={<CloseButton close={this.props.handleCloseModal} />}>
        <ModalBody>
        <NavigationBar getPokemonDetails={this.props.getPokemonDetails}
                       previous={this.props.data.previous}
                       next={this.props.data.next}
        />
        <div className="stats-types">
          <Sprite name={this.props.data.forms[0].name}
                  image_path={this.props.data.forms[0].image_path}
                  types={this.props.data.forms[0].types}
          />
          {this.props.data.forms.length > 1 ? <AlternateForms forms={alternateForms} selectedForm={0} /> : null}
          <BasicInfo id={this.props.data.id}
                     name={this.props.data.name}
                     description={this.props.data.description}
                     species={this.props.data.species}
                     abilities={this.props.data.forms[0].abilities}
          />

          <StatGraph stats={this.props.data.forms[0].stats} />
          <TypeContainer types={this.props.data.forms[0].types} weaknesses={this.props.data.forms[0].weaknesses} />
        </div>
        <div>Evolutions</div>
        </ModalBody>
      </Modal>
    );

  }
}

PokemonModal.propTypes = propTypes

export default PokemonModal;
