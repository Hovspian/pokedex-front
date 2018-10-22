import React from 'react';
import { shallow } from 'enzyme';

import PokemonCard from '../../js/home/PokemonCard';
import ExampleJSON from '../../../local_data/example_single.json';

describe('PokemonCard', () => {
  it('should render Card component without crashing', () => {
    shallow(<PokemonCard {...ExampleJSON} />);
  });

  it('should match Card component snapshot', () => {
    const wrapper = shallow(<PokemonCard {...ExampleJSON} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('capitalizeName', () => {
    it('should do nothing to an empty string', () => {
      const emptyStr = PokemonCard.prototype.capitalizeName('');
      expect(emptyStr).toEqual('');
    });

    it('should capitalize the first letter of a string', () => {
      const capitalizedName = PokemonCard.prototype.capitalizeName('bulbasaur');
      expect(capitalizedName).toEqual('Bulbasaur');
    })

    it('should capitalize the letter after a space', () => {
      const capitalizedName = PokemonCard.prototype.capitalizeName('ash ketchum');
      expect(capitalizedName).toEqual('Ash Ketchum');
    })

    it('should capitalize the letter after a dash', () => {
      const capitalizedName = PokemonCard.prototype.capitalizeName('porygon-z');
      expect(capitalizedName).toEqual('Porygon-Z');
    });

    it('should handle multiple spaces', () => {
      const capitalizedName = PokemonCard.prototype.capitalizeName('bug catcher greg');
      expect(capitalizedName).toEqual('Bug Catcher Greg');
    });

    it('should handle multiple dashes', () => {
      const capitalizedName = PokemonCard.prototype.capitalizeName('porygon-z-again');
      expect(capitalizedName).toEqual('Porygon-Z-Again');
    });

    it('should handle a mix of spaces and dashes', () => {
      const capitalizedName = PokemonCard.prototype.capitalizeName('porygon-z again');
      expect(capitalizedName).toEqual('Porygon-Z Again');
    });
  });
});
