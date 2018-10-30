import React from 'react';
import { shallow } from 'enzyme';

import PokemonType from '../../js/core/PokemonType';
import ExampleJSON from '../../../local_data/example_single.json';
import ExampleDetailJSON from '../../../local_data/example_detail.json';


describe('PokemonType render', () => {
  it('should render Type component without crashing', () => {
    shallow(<PokemonType isModal isWeakness types={ExampleJSON.types} />);
  });

  it('should match Type component snapshot', () => {
    const wrapper = shallow(<PokemonType isModal isWeakness types={ExampleJSON.types} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Tests render output for different types and sizes', () => {
  it('should render 4 types', () => {
    const wrapper = shallow(<PokemonType isModal isWeakness types={ExampleDetailJSON.forms[0].weaknesses} />);
    expect(wrapper.children().length).toEqual(ExampleDetailJSON.forms[0].weaknesses.length);
  });

  it('should render a hover over', () => {
    const wrapper = shallow(<PokemonType isModal isWeakness types={ExampleDetailJSON.forms[0].weaknesses} />);

    expect(wrapper.exists('.extra-damage-tooltip')).toEqual(true);
  });

  it('should not render a hover over', () => {
    const example = Object.assign({}, ExampleDetailJSON);
    // remove x4 damage multiplier
    example.forms[0].weaknesses.splice(-1, 1);
    const wrapper = shallow(<PokemonType isModal isWeakness types={example.forms[0].weaknesses} />);
    expect(wrapper.exists('.extra-damage-tooltip')).toEqual(false);
  });

  it('should render a small type', () => {
    const wrapper = shallow(<PokemonType isModal={false} isWeakness types={ExampleDetailJSON.forms[0].types} />);
    expect(wrapper.exists('h3')).toEqual(false);
  });

  it('should render a large type', () => {
    const wrapper = shallow(<PokemonType isModal isWeakness={false} types={ExampleDetailJSON.forms[0].types} />);
    expect(wrapper.exists('h3')).toEqual(true);
  })

})
