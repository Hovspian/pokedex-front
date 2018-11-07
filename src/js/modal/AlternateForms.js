import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

import '../../styles/modal/AlternateForms.css';

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
    const allForms = this.props.forms.map((form, index) => {
      return <Form key={form.name}
                   selected={this.props.selectedForm === index}
                   onClick={() => {}}
                   {...this.props.forms[index]}
             />
    });

    return (
      <div className="form-container">
        {allForms}
      </div>
    );
  }

}

AlternateForms.propTypes = propTypes;

export default AlternateForms;
