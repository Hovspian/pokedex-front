import React from 'react';
import { shallow } from 'enzyme';

import EvolutionChain from '../../js/modal/EvolutionChain';

import ExampleJSON from '../../../local_data/example_detail.json';
import ExampleJSON2 from '../../../local_data/example_detail_2.json';
import ExampleJSON3 from '../../../local_data/example_detail_3.json';

describe('EvolutionChain Component', () => {
  describe('when there are evolutions', () => {
    let props;
    beforeEach(() => {
      props = {
        getPokemonDetails: (() => {}),
        evolutions: ExampleJSON.evolutions,
      };
    });

    it('should render EvolutionChain component without crashing', () => {
      shallow(<EvolutionChain {...props} />);
    });

    it('should match EvolutionChain component snapshot', () => {
      const wrapper = shallow(<EvolutionChain {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should have an evolution chain within it', () => {
      const wrapper = shallow(<EvolutionChain {...props} />);
      expect(wrapper.find('.evolution-chain-container')).toHaveLength(1);
    });

    describe('Evolution components in an evolution chain', () => {
      it('should have 3 Evolution components for the Butterfree chain', () => {
        const wrapper = shallow(<EvolutionChain {...props} />);
        expect(wrapper.find('Evolution')).toHaveLength(3);
      });

      it('should have 5 Evolution components for the Cascoon chain', () => {
        props.evolutions = ExampleJSON2.evolutions;
        const wrapper = shallow(<EvolutionChain {...props} />);
        expect(wrapper.find('Evolution')).toHaveLength(5);
      });

      it('should have 2 Evolution components for the Rattata chain', () => {
        props.evolutions = ExampleJSON3.evolutions;
        const wrapper = shallow(<EvolutionChain {...props} />);
        expect(wrapper.find('Evolution')).toHaveLength(2);
      });
    });

    describe('evolution items in an evolution chain', () => {
      it('should have 3 evolution items for the Butterfree chain', () => {
        const wrapper = shallow(<EvolutionChain {...props} />);
        expect(wrapper.find('.evolution-chain-item')).toHaveLength(3);
      });

      it('should have 3 evolution items for the Cascoon chain', () => {
        props.evolutions = ExampleJSON2.evolutions;
        const wrapper = shallow(<EvolutionChain {...props} />);
        expect(wrapper.find('.evolution-chain-item')).toHaveLength(3);
      });

      it('should have 2 evolution items for the Rattata chain', () => {
        props.evolutions = ExampleJSON3.evolutions;
        const wrapper = shallow(<EvolutionChain {...props} />);
        expect(wrapper.find('.evolution-chain-item')).toHaveLength(2);
      });
    });

  });

  describe('when there are no evolutions', () => {
    let props;
    beforeEach(() => {
      props = {
        getPokemonDetails: (() => {}),
        evolutions: {
          1: null,
          2: null,
          3: null,
        },
      };
    });

    it('should render EvolutionChain component without crashing', () => {
      shallow(<EvolutionChain {...props} />);
    });

    it('should match EvolutionChain component snapshot', () => {
      const wrapper = shallow(<EvolutionChain {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should not have an evolution chain within it', () => {
      const wrapper = shallow(<EvolutionChain {...props} />);
      expect(wrapper.find('.evolution-chain-container')).toHaveLength(0);
    });
  });
});
