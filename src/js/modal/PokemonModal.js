import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
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
  }

  render () {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }}>&times;</button>;
    return (
      <Modal isOpen={this.state.modal} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <b>Look at the top right of the page/viewport!</b><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    );
  }
}

export default PokemonModal;
