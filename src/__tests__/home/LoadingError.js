import React from 'react';
import { shallow } from 'enzyme';

import LoadingError from '../../js/home/LoadingError';

describe('LoadingError Component', () => {
  it('should render LoadingError component without crashing', () => {
    shallow(<LoadingError error="test error" />);
  });

  it('should match LoadingError component snapshot', () => {
    const wrapper = shallow(<LoadingError error="test error" />);
    expect(wrapper).toMatchSnapshot();
  });
});
