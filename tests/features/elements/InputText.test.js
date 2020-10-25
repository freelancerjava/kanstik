import React from 'react';
import { shallow } from 'enzyme';
import { InputText } from '../../../src/features/elements';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<InputText />);
  expect(renderedComponent.find('.elements-input-text').length).toBe(1);
});
