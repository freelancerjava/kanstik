import React, { useEffect, useState } from 'react';
import InputText from '../elements/InputText';
// import PropTypes from 'prop-types';

export default function Search() {
  const [slVisible, setslVisible] = useState(false)
  const [searchWord, setsearchWord] = useState("")
  const list = [
    { text: "Some data" },
    { text: "Some text" },
    { text: "Some product" },
    { text: "Some app" },
  ]

  const findWord = () => {
    return list.filter(item => {
      return item.text.toLowerCase().includes(searchWord.toLowerCase())
    })
  }
  return (
    <div className="navbar-search">
      <InputText
        value={searchWord}
        setsearchWord={setsearchWord}
        onFocus={() => setslVisible(true)}
        onBlur={() => setslVisible(false)}
        placeholder={"Search word"} appendIcon={"fa-search"} />
      {slVisible && <ul className="search-list">{findWord().map((item, index) => {
        return (<li key={index}><a href="#">{item.text}</a></li>)
      })}
      </ul>}
    </div>
  );
};

Search.propTypes = {};
Search.defaultProps = {};
