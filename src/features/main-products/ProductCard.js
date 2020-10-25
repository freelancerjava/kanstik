import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export default function ProductCard({ data }) {
  return (
    <div className="main-products-product-card">
      <div className="img-wrap">
        <img src={data.img} alt="product" />
      </div>
      <div className="title">{data.title}</div>
      <div className="price-cart">
        <div className="price">${data.price}</div>
        <div className="cart"><i className="fa fa-shopping-cart" /></div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {};
ProductCard.defaultProps = {};
