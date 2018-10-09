import React from 'react';
import { shallow } from 'enzyme';

import PokemonType from '../js/PokemonType';
import ExampleJSON from '../../local_data/example_single.json';

describe('PokemonType', () => {
  it('should render Type component without crashing', () => {
    shallow(<PokemonType id={ExampleJSON.id} types={ExampleJSON.types} />);
  });

  it('should match Type component snapshot', () => {
    const wrapper = shallow(<PokemonType id={ExampleJSON.id} types={ExampleJSON.types} />);
    expect(wrapper).toMatchSnapshot();
  });
});
