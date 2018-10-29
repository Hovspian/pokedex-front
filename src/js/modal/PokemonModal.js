import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import StatGraph from './StatGraph';
import TypeContainer from './TypeContainer';
import CloseButton from './CloseButton';

import '../../styles/modal/PokemonModal.css'

const propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
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

  render() {
    return (
      <Modal isOpen={this.props.modal} className="pokemodal" align="center" external={<CloseButton close={this.props.handleCloseModal} />}>
        <ModalHeader>Navigate to other Pokemon</ModalHeader>
        <ModalBody>
          <p>Will need to be edited.</p>
          <p>Id: {this.props.id}</p>
          <p>Name: {this.props.name}</p>
          <p>Description: {this.props.description}</p>
          <p>Species: {this.props.species}</p>
          <div className="stats-types">
            {this.props.forms && <StatGraph stats={this.props.forms[0].stats} />}
            {this.props.forms && <TypeContainer types={this.props.forms[0].types} weaknesses={this.props.forms[0].weaknesses} />}
          </div>
          <div>Evolutions</div>
        </ModalBody>
      </Modal>
    )
  }
};

PokemonModal.propTypes = propTypes

export default PokemonModal;
