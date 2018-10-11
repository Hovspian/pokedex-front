import React from 'react';
import { shallow } from 'enzyme';

import Header from '../js/Header';

describe('Header Component', () => {

  it('should render Header component without crashing', () => {
    shallow(<Header />);
  });

  it('should match Header component snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
