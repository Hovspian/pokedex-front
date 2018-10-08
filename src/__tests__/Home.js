import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from '../js/Home';

describe('Home Component', () => {

  it('should render Home component without crashing', () => {
    shallow(<Home />);
  });

  it('should match Home component snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
})
