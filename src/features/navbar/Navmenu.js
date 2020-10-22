import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export default function Navmenu() {
  return (
    <ul className="menu">
      {['menu', 'menu', 'menu', 'menu'].map(item => {
        return (
          <li><a href="#">menu</a></li>
        )
      })}
    </ul>
  );
};

Navmenu.propTypes = {};
Navmenu.defaultProps = {};
