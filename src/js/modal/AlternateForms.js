import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

import '../../styles/modal/AlternateForms.css';

const propTypes = {
  selectedForm: PropTypes.number.isRequired,
  selectForm: PropTypes.func.isRequired,
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

class AlternateForms extends React.Component {
  render () {
    const allForms = this.props.forms.map((form, index) => {
      return <Form key={form.name}
                   selected={this.props.selectedForm === index}
                   onClick={() => { this.props.selectForm(index) }}
                   {...this.props.forms[index]}
             />
    }, this);

    return (
      <div className="form-container">
        {allForms}
      </div>
    );
  }

}

AlternateForms.propTypes = propTypes;

export default AlternateForms;
