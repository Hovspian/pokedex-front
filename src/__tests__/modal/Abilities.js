import React from 'react';
import { shallow } from 'enzyme';

import Abilities from '../../js/modal/Abilities';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('Abilities Component', () => {
  let props;
  beforeEach(() => {
    props = {
      abilities: ExampleJSON.forms[0].abilities,
    };
  });

  it('should render Abilities component without crashing', () => {
    shallow(<Abilities {...props} />);
  });

  it('should match Abilities component snapshot', () => {
    const wrapper = shallow(<Abilities {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
