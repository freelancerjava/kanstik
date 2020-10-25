import React from 'react';
import { shallow } from 'enzyme';
import { ProductsContainer } from '../../../src/features/main-products';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ProductsContainer />);
  expect(renderedComponent.find('.main-products-products-container').length).toBe(1);
});
