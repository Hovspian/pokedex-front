import React from 'react';
import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';

import '../../styles/modal/SingleAbility.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

class SingleAbility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <span className="ability">
        <span id={this.props.name}
              onMouseOver={this.toggle}
              onMouseOut={this.toggle}
        >
          {this.props.name}
        </span>
        <Popover placement="top"
                 isOpen={this.state.isOpen}
                 target={this.props.name}
                 hideArrow={true}
        >
          <PopoverBody><h5>{this.props.description}</h5></PopoverBody>
        </Popover>
      </span>
    );
  }
}

SingleAbility.propTypes = propTypes;

export default SingleAbility;
