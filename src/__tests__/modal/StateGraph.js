import React from 'react';
import { shallow } from 'enzyme';

import StatGraph from '../../js/modal/StatGraph';

const testStats = {
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "special-attack": 65,
    "special-defense": 65,
    "speed": 45
  }

describe('StatGraph Component', () => {

  it('should render StatGraph component without crashing', () => {
    shallow(<StatGraph stats={testStats}/>);
  });

  it('should match StatGraph component snapshot', () => {
    const wrapper = shallow(<StatGraph stats={testStats}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});
