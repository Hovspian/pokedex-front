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

describe('Test Stat calculation', () => {
  it('should return minimum height with a negative height value', () => {
    const instance = shallow(<Stat statAmount={-1} />).instance();
    expect(instance.calculateHeight()).toEqual(30);
  });

  it('should return maximum height with a large height value', () => {
    const instance = shallow(<Stat statAmount={300} />).instance();
    expect(instance.calculateHeight()).toEqual(200);
  });

  it('should return height if within range', () => {
    const instance = shallow(<Stat statAmount={50} />).instance();
    expect(instance.calculateHeight()).toEqual(50);
  });
})
