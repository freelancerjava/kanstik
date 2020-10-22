import React from 'react';
import { shallow } from 'enzyme';
import { Phone } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Phone />);
  expect(renderedComponent.find('.navbar-phone').length).toBe(1);
});
