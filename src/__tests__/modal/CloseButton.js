import React from 'react';
import { shallow } from 'enzyme';

import CloseButton from '../../js/modal/CloseButton';

describe('CloseButton Component', () => {

  it('should render CloseButton component without crashing', () => {
    shallow(<CloseButton close={() => false}/>);
  });

  it('should match CloseButton component snapshot', () => {
    const wrapper = shallow(<CloseButton close={() => false}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
