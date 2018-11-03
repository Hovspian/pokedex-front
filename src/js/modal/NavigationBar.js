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
      <Container fluid={false}>
        <Row>

          <Col className="navigation">
            <Row>
              <Col style={{textAlign: 'left'}}>
                <i className="arrow left"></i>
              </Col>
              <Col style={{textAlign: 'right'}}>
                {`${this.props.previous.id}  ${this.props.previous.name}`}
              </Col>
            </Row>
          </Col>

          <Col className="navigation">
            <Row>
              <Col style={{textAlign: 'left'}}>
                {`${this.props.next.name}  ${this.props.next.id}`}
              </Col>
              <Col style={{textAlign: 'right'}}>
                <i className="arrow right"></i>
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
