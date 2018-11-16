import React from 'react';
import { shallow } from 'enzyme';

import Search from '../../js/home/Search';

describe('Search Component', () => {

  it('should render Search component without crashing', () => {
    shallow(<Search fetchPokemon={() => {}} />);
  });

  it('should match Search component snapshot', () => {
    const wrapper = shallow(<Search fetchPokemon={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
