import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../js/home/Home';

import * as PokemonAPI from '../../js/core/PokemonAPI';
import ExampleJSON from '../../../local_data/example_detail.json';

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
  });

  describe('selectForm', () => {
    let wrapper, instance;
    beforeEach(() => {
      wrapper = shallow(<Home />);
      instance = wrapper.instance();

      wrapper.setState({
        pokemonDetails: ExampleJSON,
        selectedForm: 0,
      });
    });

    it('should set state.selectedForm to the passed index when the index is valid', () => {
      wrapper.setState({ selectedForm: 3 });
      expect(wrapper.state('selectedForm')).toBe(3);

      instance.selectForm(0);
      expect(wrapper.state('selectedForm')).toBe(0);
    });

    it('should do nothing when the passed index is out of range of the forms', () => {
      expect(wrapper.state('selectedForm')).toBe(0);

      instance.selectForm(10);
      expect(wrapper.state('selectedForm')).toBe(0);
    });

    it('should do nothing when the passed index is negative', () => {
      expect(wrapper.state('selectedForm')).toBe(0);

      instance.selectForm(-1);
      expect(wrapper.state('selectedForm')).toBe(0);
    });

    it('should do nothing when the state does not have pokemonDetails', () => {
      wrapper.setState({ pokemonDetails: null });
      expect(wrapper.state('selectedForm')).toBe(0);

      instance.selectForm(1);
      expect(wrapper.state('selectedForm')).toBe(0);
    });

  });

  describe('Test API is being called', () => {
    let wrapper, instance;
    beforeEach(() => {
      wrapper = shallow(<Home />);
      instance = wrapper.instance();
    });

    it('should call API if clicked on pokemon card', () => {
      PokemonAPI.getPokemonDetails = jest.fn();
      PokemonAPI.getPokemonDetails.mockImplementation(() => Promise.resolve(ExampleJSON))

      return instance.getDetails(1)
        .then(() => {
          expect(PokemonAPI.getPokemonDetails).toHaveBeenCalledTimes(1);
          expect(instance.state.modal).toBe(true);
          expect(instance.state.pokemonDetails).toEqual(ExampleJSON);
          expect(instance.state.selectedForm).toBe(0);
        });

    });

    it('should call API when fetching pokemon', () => {
      PokemonAPI.getRangeOfPokemon = jest.fn();
      PokemonAPI.getRangeOfPokemon.mockImplementation(() => Promise.resolve([{
        "id": 1,
        "name": "Bulbasaur",
        "types": [
          "grass",
          "poison"
        ],
        "image_path": "/sprites/pokemon/large/1.png"
      }]
      ));

      return instance.fetchPokemon({rangeStart: 1, rangeEnd: 1})
        .then(() => {
          expect(PokemonAPI.getRangeOfPokemon).toHaveBeenCalledTimes(1);
          expect(instance.state.pokemon).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                "id": 1,
                "name": "Bulbasaur",
                "types": [
                  "grass",
                  "poison"
                ],
                "image_path": "/sprites/pokemon/large/1.png"
              })
            ])
          )
        });
    });
  });
});
