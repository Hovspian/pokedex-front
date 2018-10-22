import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../../js/home/Loader';

describe('Loader Component', () => {

  it('should render Loader component without crashing', () => {
    shallow(<Loader />);
  });

  it('should match Loader component snapshot', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
