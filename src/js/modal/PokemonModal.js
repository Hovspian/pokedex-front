import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import StatGraph from './StatGraph';

import CloseButton from './CloseButton';

import '../../styles/modal/PokemonModal.css'

const propTypes = {
  modal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
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
          multiplier: PropTypes.string,
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

const PokemonModal = (props) => (
  <Modal isOpen={props.modal} className="pokemodal" align="center" external={<CloseButton close={props.handleCloseModal} />}>
    <ModalHeader>Navigate to other Pokemon</ModalHeader>
    <ModalBody>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
      <p>Species: {props.species}</p>
      {/* {props.forms && console.log(props.forms[0].stats)} */}
      {props.forms && <StatGraph stats={props.forms[0].stats}/>}
    </ModalBody>
  </Modal>
);

PokemonModal.propTypes = propTypes

export default PokemonModal;
