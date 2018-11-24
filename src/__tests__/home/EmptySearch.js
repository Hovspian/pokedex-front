import React from 'react';
import { shallow } from 'enzyme';

import EmptySearch from '../../js/home/EmptySearch';

describe('EmptySearch Component', () => {
  it('should render EmptySearch component without crashing', () => {
    shallow(<EmptySearch />);
  });

  it('should match EmptySearch component snapshot', () => {
    const wrapper = shallow(<EmptySearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
