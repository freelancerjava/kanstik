import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { MainNavbar } from '../navbar';

export default function WelcomePage() {
  return (
    <>
      <Container>
        <MainNavbar />
      </Container>
    </>
  );
}
