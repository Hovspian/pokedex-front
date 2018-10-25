import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import CloseButton from './CloseButton';

import '../../styles/modal/PokemonModal.css'

const propTypes = {
  modal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
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
            multiplier: PropTypes.number.isRequired,
          }).isRequired
        ).isRequired,
        ablities: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
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
      ).isRequired,
      2: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          types: PropTypes.arrayOf(PropTypes.string).isRequired,
          image_path: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      3: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          types: PropTypes.arrayOf(PropTypes.string).isRequired,
          image_path: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }),
}

class PokemonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    return (
      <Modal isOpen={this.state.modal} className="pokemodal" align="center" external={<CloseButton close={this.toggle} />}>
        <ModalHeader>Navigate to other Pokemon</ModalHeader>
        <ModalBody>
          <b>Pokemon info coming soon&trade;</b>
        </ModalBody>
      </Modal>
    );
  }
}

PokemonModal.propTypes = propTypes

export default PokemonModal;
