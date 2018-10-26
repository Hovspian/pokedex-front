import React from 'react';
import { shallow } from 'enzyme';

import PokemonModal from '../../js/modal/PokemonModal';

describe('PokemonModal Component', () => {

  it('should render PokemonModal component without crashing', () => {
    shallow(<PokemonModal handleCloseModal={() => {}} modal={true}/>);
  });

  it('should match PokemonModal component snapshot', () => {
    const wrapper = shallow(<PokemonModal handleCloseModal={() => {}} modal={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});
