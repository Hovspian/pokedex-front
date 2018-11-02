import React from 'react';
import { shallow } from 'enzyme';

import TypeContainer from '../../js/modal/TypeContainer';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('TypeContainer Component', () => {
  let props;
  beforeEach(() => {
    props = {
      types: ExampleJSON.forms[0].types,
      weaknesses: ExampleJSON.forms[0].weaknesses,
    };
  });

  it('should render TypeContainer component without crashing', () => {
    shallow(<TypeContainer {...props} />);
  });

  it('should match TypeContainer component snapshot', () => {
    const wrapper = shallow(<TypeContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

});
