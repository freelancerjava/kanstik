import React from 'react';
import { shallow } from 'enzyme';
import { Bookcall } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Bookcall />);
  expect(renderedComponent.find('.navbar-bookcall').length).toBe(1);
});
