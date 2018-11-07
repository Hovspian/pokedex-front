import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';


const propTypes = {
  selectedForm: PropTypes.number.isRequired,
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

class AlternateForms extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedForm: 0,
    };
  }

  render () {
    return (
      <div className="form-container">
        <Form {...this.props.forms[1]} selected={true} onClick={() => {}}/>
      </div>
    );
  }

}

AlternateForms.propTypes = propTypes;

export default AlternateForms;
