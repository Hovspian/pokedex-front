import React from 'react';
import { shallow } from 'enzyme';

import BasicInfo from '../../js/modal/BasicInfo';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('BasicInfo Component', () => {
  let props;
  beforeEach(() => {
    props = {
      id: ExampleJSON.id,
      name: ExampleJSON.name,
      description: ExampleJSON.description,
      species: ExampleJSON.species,
      abilities: ExampleJSON.forms[0].abilities,
    };
  });

  it('should render BasicInfo component without crashing', () => {
    shallow(<BasicInfo {...props} />);
  });

  it('should match BasicInfo component snapshot', () => {
    const wrapper = shallow(<BasicInfo {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('idWithZeros', () => {
    it('should prepend 2 zeros to one digit numbers', () => {
      props.id = 1;
      const wrapper = shallow(<BasicInfo {...props} />);
      const instance = wrapper.instance();

      expect(instance.idWithZeros()).toBe('001');
    });

    it('should prepend 1 zero to two digit numbers', () => {
      props.id = 56;
      const wrapper = shallow(<BasicInfo {...props} />);
      const instance = wrapper.instance();

      expect(instance.idWithZeros()).toBe('056');
    });

    it('should prepend 2 zeros to 10', () => {
      props.id = 10;
      const wrapper = shallow(<BasicInfo {...props} />);
      const instance = wrapper.instance();

      expect(instance.idWithZeros()).toBe('010');
    });

    it('should not prepend zeros to three digit numbers', () => {
      props.id = 359;
      const wrapper = shallow(<BasicInfo {...props} />);
      const instance = wrapper.instance();

      expect(instance.idWithZeros()).toBe('359');
    });

    it('should not prepend zeros to 100', () => {
      props.id = 100;
      const wrapper = shallow(<BasicInfo {...props} />);
      const instance = wrapper.instance();

      expect(instance.idWithZeros()).toBe('100');
    });
  });

});
