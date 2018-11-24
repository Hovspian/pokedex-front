import React from 'react';
import { shallow } from 'enzyme';

import Evolution from '../../js/modal/Evolution';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('Evolution Component', () => {
  let props;
  beforeEach(() => {
    props = {
      getPokemonDetails: (() => {}),
      id: ExampleJSON.evolutions[1][0].id,
      name: ExampleJSON.evolutions[1][0].name,
      types: ExampleJSON.evolutions[1][0].types,
      image_path: ExampleJSON.evolutions[1][0].image_path,
    };
  });

  it('should render Evolution component without crashing', () => {
    shallow(<Evolution {...props} />);
  });

  it('should match Evolution component snapshot', () => {
    const wrapper = shallow(<Evolution {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

});
