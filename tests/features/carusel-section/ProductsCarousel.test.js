import React from 'react';
import { shallow } from 'enzyme';
import { ProductsCarousel } from '../../../src/features/carusel-section';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ProductsCarousel />);
  expect(renderedComponent.find('.carusel-section-products-carousel').length).toBe(1);
});
