import React from 'react';
import { shallow } from 'enzyme';

import SingleAbility from '../../js/modal/SingleAbility';

describe('SingleAbility Component', () => {
  let props;
  beforeEach(() => {
    props = {
      name: "Thick Fat",
      description: "Halves damage from fire and ice moves.",
      index: 0,
    };
  });

  it('should render SingleAbility component without crashing', () => {
    shallow(<SingleAbility {...props} />);
  });

  it('should match SingleAbility component snapshot', () => {
    const wrapper = shallow(<SingleAbility {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
