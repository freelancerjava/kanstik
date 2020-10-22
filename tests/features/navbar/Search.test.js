import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Search />);
  expect(renderedComponent.find('.navbar-search').length).toBe(1);
});
