import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../js/home/Home';

import * as PokemonAPI from '../../js/core/PokemonAPI';
// const api = require('../../js/core/PokemonAPI');

describe('Home Component', () => {

  it('should render Home component without crashing', () => {
    shallow(<Home />);
  });

  it('should match Home component snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('toggle', () => {
    let wrapper, instance;
    beforeEach(() => {
      wrapper = shallow(<Home />);
      instance = wrapper.instance();
    });

    it('should set `state.modal` to false when closing modal', () => {
      wrapper.setState({ modal: true });
      expect(wrapper.state('modal')).toBe(true);

      instance.handleCloseModal();
      expect(wrapper.state('modal')).toBe(false);
    });

    it('should call API if clicked on pokemon card', () => {
      PokemonAPI.getPokemonDetails = jest.fn();
      PokemonAPI.getPokemonDetails.mockImplementation(() => Promise.resolve({"name": "Venasaur"}))

      return instance.handlePokemonCardClick(1)
        .then(() => {
          expect(PokemonAPI.getPokemonDetails).toHaveBeenCalledTimes(1);
          expect(instance.state.modal).toBe(true);
          expect(instance.state.pokemonDetails).toEqual({"name": "Venasaur"})
        });

    });
  })
});
