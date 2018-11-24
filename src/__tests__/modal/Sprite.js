import React from 'react';
import { shallow } from 'enzyme';

import Sprite from '../../js/modal/Sprite';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('Sprite Component', () => {
  let props;
  beforeEach(() => {
    props = {
      name: ExampleJSON.name,
      image_path: ExampleJSON.forms[0].image_path,
      types: ExampleJSON.forms[0].types,
    };
  });

  it('should render Sprite component without crashing', () => {
    shallow(<Sprite {...props} />);
  });

  it('should match Sprite component snapshot', () => {
    const wrapper = shallow(<Sprite {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
