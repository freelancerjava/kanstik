import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export default function Submenu({ submenu }) {
  return (
    <div className="top-menu-submenu">

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

      <div className="submenu-section">
        <h5>Title</h5>
        <ul className="submenu">{
          submenu.map((item, key) => {
            return <li className="submenu-li" key={key}><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

    </div>
  );
};

Submenu.propTypes = {};
Submenu.defaultProps = {};
