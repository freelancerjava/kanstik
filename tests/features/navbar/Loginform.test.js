import React from 'react';
import { shallow } from 'enzyme';
import { Loginform } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Loginform />);
  expect(renderedComponent.find('.navbar-loginform').length).toBe(1);
});
