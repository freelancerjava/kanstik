import React, { useEffect } from 'react';
import Gallery from '../elements/Gallery';
// import PropTypes from 'prop-types';

export default function ProductsCarousel() {
  const data = [
    { url: "https://www.informat.ru/upload/iblock/316/31691d933d38dc6cdfc06d27b5c5b0a9.jpg" },
    { url: "https://www.informat.ru/upload/iblock/61a/61a897554c505ef8f9e46bdf2e2d2fcd.jpg" },
    { url: "https://www.informat.ru/upload/iblock/c6d/c6db6da21c1a50c76049549ae98a96a4.jpg" },
    { url: "https://www.informat.ru/upload/iblock/99b/99b2a093e9452111986a2c0255797fac.jpg" },
  ]
  return (
    <Gallery>
      {data.map((item, key) => {
        return <div key={key} className="carusel-section-products-carousel">
          <img src={item.url} alt="product" />
        </div>
      })}
    </Gallery>

  );
};

ProductsCarousel.propTypes = {};
ProductsCarousel.defaultProps = {};
