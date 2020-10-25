import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ProductsCarousel from '../carusel-section/ProductsCarousel';
import ProductsContainer from '../main-products/ProductsContainer';
import { MainNavbar } from '../navbar';
import Menu from '../top-menu/Menu';

export default function WelcomePage() {
  return (
    <>
      <Container>
        <MainNavbar />
        <Menu />
        <ProductsCarousel />
        <ProductsContainer />
      </Container>
    </>
  );
}
