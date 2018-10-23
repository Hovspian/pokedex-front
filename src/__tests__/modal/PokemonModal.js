import React from 'react';
import { shallow } from 'enzyme';

import PokemonModal from '../../js/modal/PokemonModal';

describe('PokemonModal Component', () => {

  it('should render PokemonModal component without crashing', () => {
    shallow(<PokemonModal modal={true}/>);
  });

  it('should match PokemonModal component snapshot', () => {
    const wrapper = shallow(<PokemonModal modal={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('toggle', () => {
    let wrapper, instance;
    beforeEach(() => {
      wrapper = shallow(<PokemonModal modal={true}/>);
      instance = wrapper.instance();
    });

    it('should set `state.modal` to true if it is false', () => {
      wrapper.setState({ modal: false });
      expect(wrapper.state('modal')).toBe(false);

      instance.toggle();
      expect(wrapper.state('modal')).toBe(true);
    });

    it('should set `state.modal` to false if it is true', () => {
      wrapper.setState({ modal: true });
      expect(wrapper.state('modal')).toBe(true);

      instance.toggle();
      expect(wrapper.state('modal')).toBe(false);
    });
  })
});
