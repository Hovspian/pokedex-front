import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import '../../styles/modal/Modal.css'

const propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  species: PropTypes.string,
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      weaknesses: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          multiplier: PropTypes.number,
        })
      ),
      ablities: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          hidden: PropTypes.bool,
        })
      ),
      stats: PropTypes.shape({
        hp: PropTypes.number,
        attack: PropTypes.number,
        defense: PropTypes.number,
        'special-attack': PropTypes.number,
        'special-defense': PropTypes.number,
        speed: PropTypes.number,
      }),
      image_path: PropTypes.string,
    })
  ),
  evolutions: PropTypes.shape({
    1: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.string),
        image_path: PropTypes.string,
      })
    ),
    2: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.string),
        image_path: PropTypes.string,
      })
    ),
    3: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.string),
        image_path: PropTypes.string,
      })
    ),
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
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <Modal isOpen={this.state.modal} className="pokemodal" align="center" external={externalCloseBtn}>
        <ModalHeader>Navigate to other Pokemon</ModalHeader>
        <ModalBody>
          <b>Pokemon info coming soon&trade;</b><br />
        </ModalBody>
      </Modal>
    );
  }
}

PokemonModal.propTypes = propTypes

export default PokemonModal;
