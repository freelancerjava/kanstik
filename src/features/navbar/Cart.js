import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export default function Cart() {
  return (
    <div className="cart-mini">
      <i className="fa fa-shopping-cart" />
      <a href="#" className="blocked-link">zero in cart</a>
      <a href="#" className="go-to-cart"><i className="fa fa-arrow-right" /></a>
    </div>
  );
};

Cart.propTypes = {};
Cart.defaultProps = {};
