import React from 'react';
import { shallow } from 'enzyme';

import Form from '../../js/modal/Form';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('Form Component', () => {
  let props;
  beforeEach(() => {
    props = {
      selected: false,
      name: ExampleJSON.forms[0].name,
      image_path: ExampleJSON.forms[0].image_path,
      onClick: (() => {}),
    };
  });

  it('should render Form component without crashing', () => {
    shallow(<Form {...props} />);
  });

  it('should match Form component snapshot', () => {
    const wrapper = shallow(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

});
