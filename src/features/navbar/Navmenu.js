import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export default function Navmenu() {
  return (
    <ul className="menu">
      {['Доставка', 'Оплата', 'Адреса магазинов', 'Контакты', 'Акции'].map((item, key) => {
        return (
          <li key={key}><a href="#">{item}</a></li>
        )
      })}
    </ul>
  );
};

Navmenu.propTypes = {};
Navmenu.defaultProps = {};
