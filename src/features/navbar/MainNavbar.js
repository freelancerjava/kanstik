import React, { useEffect, useState } from 'react';
import Bookcall from './Bookcall';
import Location from './Location';
import Loginform from './Loginform';
import Logo from './Logo';
import Navmenu from './Navmenu';
import Phone from './Phone';
import Search from './Search';
// import PropTypes from 'prop-types';

export default function MainNavbar() {
  return (
    <div className="main-navbar">
      <div className="logo-location">
        <Location />
        <Logo />
      </div>
      <div className="search-menu">
        <Navmenu />
        <Search />
      </div>
      <div className="phone-login">
        <Phone />
        <Loginform />
      </div>
      <div className="book-cart">
        <Bookcall />
        <div className="cart-mini">
          <span>
            <i className="" />
            <a href="#" className="blocked-link">zero in cart</a>
          </span>
          <a href="#"><i className="" /></a>
        </div>
      </div>
    </div>
  );
};

MainNavbar.propTypes = {};
MainNavbar.defaultProps = {};
