import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export default function InputText({ className, placeholder, appendIcon, setsearchWord, ...props }) {
  return (<div className="input-wrapper">
    <input
      className={`default-input-text ${className}`}
      type="text"
      placeholder={placeholder || ""}
      onChange={(val) => setsearchWord(val.target.value)}
      {...props} />
    {appendIcon && <i className={`appendIcon fa ${appendIcon}`} />}
  </div>
  );
};

InputText.propTypes = {};
InputText.defaultProps = {};
