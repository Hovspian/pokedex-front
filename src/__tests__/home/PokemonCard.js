import React from 'react';
import { shallow } from 'enzyme';

import PokemonCard from '../../js/home/PokemonCard';
import ExampleJSON from '../../../local_data/example_single.json';

describe('PokemonCard', () => {
  it('should render Card component without crashing', () => {
    shallow(<PokemonCard handlePokemonCardClick={() => {}} {...ExampleJSON} />);
  });

  it('should match Card component snapshot', () => {
    const wrapper = shallow(<PokemonCard handlePokemonCardClick={() => {}} {...ExampleJSON} />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
