import React from 'react';
import { shallow } from 'enzyme';

import Stat from '../../js/modal/Stat';

describe('Stat Component', () => {
  it('should render Stat component without crashing', () => {
    shallow(<Stat statAmount={10} />);
  });

  it('should match Stat component snapshot', () => {
    const wrapper = shallow(<Stat statAmount={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});
