import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from '../../js/modal/NavigationBar';
import ExampleJSON from '../../../local_data/example_detail.json';

describe('NavigationBar Component', () => {

  const props = {
    getPokemonDetails: (() => {}),
    previous: ExampleJSON.previous,
    next: ExampleJSON.next,
  }

  it('should render NavigationBar component without crashing', () => {
    shallow(<NavigationBar {...props} />);
  });

  it('should match NavigationBar component snapshot', () => {
    const wrapper = shallow(<NavigationBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
