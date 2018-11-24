import React from 'react';
import { shallow } from 'enzyme';

import AlternateForms from '../../js/modal/AlternateForms';

import ExampleJSON from '../../../local_data/example_detail.json';

describe('AlternateForms Component', () => {
  let props;
  beforeEach(() => {
    props = {
      selectedForm: 0,
      selectForm: (() => {}),
      forms: [{
        name: ExampleJSON.forms[0].name,
        image_path: ExampleJSON.forms[0].image_path,
      }],
    };
  });

  it('should render AlternateForms component without crashing', () => {
    shallow(<AlternateForms {...props} />);
  });

  it('should match AlternateForms component snapshot', () => {
    const wrapper = shallow(<AlternateForms {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
