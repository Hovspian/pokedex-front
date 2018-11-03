import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import '../../styles/modal/NavigationBar.css';


const propTypes = {
  getPokemonDetails: PropTypes.func.isRequired,
  previous: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  next: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

class NaviationBar extends React.Component {

  render () {
    return (
      <Container className="navigation-bar">
        <Row>

          <Col className="navigation">
            <Row>
              <Col className="left">
                <i className="arrow point-left"></i>
              </Col>
              <Col>
                {this.props.previous.name}
              </Col>
              <Col className="right">
                {`#${this.props.previous.id}`}
              </Col>
            </Row>
          </Col>

          <Col className="navigation">
            <Row>
              <Col className="left">
                {`#${this.props.next.id}`}
              </Col>
              <Col>
                {this.props.next.name}
              </Col>
              <Col className="right">
                <i className="arrow point-right"></i>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    );
  }
}

NaviationBar.propTypes = propTypes;

export default NaviationBar;
