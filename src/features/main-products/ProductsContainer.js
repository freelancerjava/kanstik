import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
// import PropTypes from 'prop-types';

export default function ProductsContainer() {
  const products = [
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/9f5/96_124_1/9f52100f1c4ffd42281a3b22121fa457.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/5c8/96_124_1/5c819ab9c28ca67500e138cfbbfea0b6.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/7b2/96_124_1/7b28d0d08941bef7e15210eb7d7d9558.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/3d5/96_124_1/3d542df329ac42d2388579469dde992c.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/44e/96_124_1/44eb24ce05db8ab965c929b258c446e1.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/ca3/96_124_1/ca35756963c124a3a2feb17316c89b08.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/9f5/96_124_1/9f52100f1c4ffd42281a3b22121fa457.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/5c8/96_124_1/5c819ab9c28ca67500e138cfbbfea0b6.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/7b2/96_124_1/7b28d0d08941bef7e15210eb7d7d9558.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/3d5/96_124_1/3d542df329ac42d2388579469dde992c.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/44e/96_124_1/44eb24ce05db8ab965c929b258c446e1.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/ca3/96_124_1/ca35756963c124a3a2feb17316c89b08.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/9f5/96_124_1/9f52100f1c4ffd42281a3b22121fa457.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/5c8/96_124_1/5c819ab9c28ca67500e138cfbbfea0b6.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/7b2/96_124_1/7b28d0d08941bef7e15210eb7d7d9558.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/3d5/96_124_1/3d542df329ac42d2388579469dde992c.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/44e/96_124_1/44eb24ce05db8ab965c929b258c446e1.jpg" },
    { title: "Title", price: 546, img: "https://www.informat.ru/upload/resize_cache/iblock/ca3/96_124_1/ca35756963c124a3a2feb17316c89b08.jpg" },
  ]
  return (
    <div className="main-products-products-container">
      {
        products.map((item, index) => {
          return <ProductCard data={item} />
        })
      }
    </div>
  );
};

ProductsContainer.propTypes = {};
ProductsContainer.defaultProps = {};
