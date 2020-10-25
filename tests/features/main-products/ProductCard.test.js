import React from 'react';
import { shallow } from 'enzyme';
import { ProductCard } from '../../../src/features/main-products';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ProductCard />);
  expect(renderedComponent.find('.main-products-product-card').length).toBe(1);
});
