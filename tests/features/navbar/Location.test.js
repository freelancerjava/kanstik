import React from 'react';
import { shallow } from 'enzyme';
import { Location } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Location />);
  expect(renderedComponent.find('.navbar-location').length).toBe(1);
});
