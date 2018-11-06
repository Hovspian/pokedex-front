import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
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
      <div>Alternate Forms</div>
    );
  }

}

AlternateForms.propTypes = propTypes;

export default AlternateForms;
