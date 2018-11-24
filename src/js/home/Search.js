import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Collapse } from 'reactstrap';

import { MAX_POKEMON, TYPES } from '../core/Constants';
import PokemonType from '../core/PokemonType';

import '../../styles/home/Search.css';

const propTypes = {
  fetchPokemon: PropTypes.func.isRequired,
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
    this.handleToggleType = this.handleToggleType.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      collapse: false,
      selectedTypes: new Array(TYPES.length).fill(false),
      selectedWeaknesses: new Array(TYPES.length).fill(false),
      idOrName: '',
      rangeStart: 1,
      rangeEnd: MAX_POKEMON,
      abilityName: ''
    };
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

  }

  handleReset() {
    this.setState({
      selectedTypes: new Array(TYPES.length).fill(false),
      selectedWeaknesses: new Array(TYPES.length).fill(false),
      idOrName: '',
      rangeStart: 1,
      rangeEnd: MAX_POKEMON,
      abilityName: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.fetchPokemon({
      idOrName: this.state.idOrName,
      rangeStart : parseInt(this.state.rangeStart, 10),
      rangeEnd: parseInt(this.state.rangeEnd, 10),
      abilityName : this.state.abilityName,
      selectedTypes: this.state.selectedTypes,
      selectedWeaknesses: this.state.selectedWeaknesses
    }, false);
  }

  handleToggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleToggleType(index, isWeakness) {
    if (isWeakness) {
      const weaknesses = [...this.state.selectedWeaknesses];
      weaknesses[index] = !weaknesses[index];
      this.setState({
        selectedWeaknesses: weaknesses
      });
    } else {
      const types = [...this.state.selectedTypes];
      types[index] = !types[index];
      this.setState({
        selectedTypes: types
      });
    }
  }

  createTypes(col, isWeakness) {
    const filteredTypes = TYPES.filter((type, index) => {
      return index % 2 === col
    });
    if (isWeakness) {
      return filteredTypes.map(type => {
        return {
          type
        };
      });
    } else {
      return filteredTypes;
    }
  }

  render() {
    return (
      <Container className="search-container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row>
              <Col>
                <Label for="idOrName" className="float-left search-label">Name or Number</Label>
              </Col>
            </Row>
            <Row>
              <Col xs={9} md={6}>
                <Input id="idOrName" onChange={this.handleInputChange} name="idOrName" value={this.state.idOrName} />
              </Col>
              <Button color="primary" xs={2}>Search</Button>
            </Row>
          </FormGroup>
          <hr className="divider"/>
          <Collapse className="advanced-search" isOpen={this.state.collapse} >
            <Row>
              <Col md={6}>
                <FormGroup row>
                  <Col xs={4} sm={5} md={4} lg={5}>
                    <Label for="rangeStart" className="search-label">Number Range</Label>
                  </Col>
                  <Col xs={3}>
                    <Input type="number" min="1" max={MAX_POKEMON} id="rangeStart" name="rangeStart" onChange={this.handleInputChange} value={this.state.rangeStart} />
                  </Col>
                  <Col xs={2} sm={1}>
                    <Label className="search-label">-</Label>
                  </Col>
                  <Col xs={3}>
                    <Input type="number" min="1" max={MAX_POKEMON} name="rangeEnd" onChange={this.handleInputChange} value={this.state.rangeEnd} />
                  </Col>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup row>
                  <Col xs={4} sm={5}>
                    <Label for="abilityName" className="search-label">Ability Name</Label>
                  </Col>
                  <Col xs={8} sm={7}>
                    <Input type="text" maxLength="25" id="abilityName" name="abilityName" onChange={this.handleInputChange} value={this.state.abilityName}/>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p className="search-label">Types</p>
                <FormGroup row>
                  <Col>
                    <PokemonType isLarge isCheckbox toggleType={this.handleToggleType} checkedTypes={this.state.selectedTypes} types={this.createTypes(0)} />
                  </Col>
                  <Col>
                    <PokemonType isLarge isCheckbox toggleType={this.handleToggleType} checkedTypes={this.state.selectedTypes} types={this.createTypes(1)} />
                  </Col>
                </FormGroup>
              </Col>
              <Col md={6}>
                <p className="search-label">Weaknesses</p>
                <FormGroup row>
                  <Col>
                    <PokemonType isLarge isCheckbox isWeakness toggleType={this.handleToggleType} checkedTypes={this.state.selectedWeaknesses} types={this.createTypes(0, true)} />
                  </Col>
                  <Col>
                    <PokemonType isLarge isCheckbox isWeakness toggleType={this.handleToggleType} checkedTypes={this.state.selectedWeaknesses} types={this.createTypes(1, true)} />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.handleReset} color="danger" className='float-right'>Reset</Button>
              </Col>
              <Col>
                <Button color="primary" className='float-left'>Search</Button>
              </Col>
            </Row>
          </Collapse>
          <div>
            <span className="search-label">{this.state.collapse ? 'Hide ' : 'Show '}</span><span className="search-label">Advanced Search </span>
            <Button className={`toggle ${this.state.collapse ? 'toggled-on' : ''}`} onClick={this.handleToggleCollapse}></Button>
          </div>
        </Form>
      </Container>
    )
  }
}

Search.propTypes = propTypes;

export default Search;
