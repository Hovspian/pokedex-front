import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from '../js/Home.js';

describe('Test Home Component', () => {

  it('should render Home component without crashing', () => {
    shallow(<Home />);
  });

  it('should match Home component snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch pokemon at beginning', () => {
    const spy = jest.spyOn(Home.prototype, 'fetchPokemon');
    const wrapper = mount(<Home />);
    expect(spy).toHaveBeenCalledWith(1, 20);
  });

})
