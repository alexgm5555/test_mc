import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

import './Search.scss';
import iconSearch from '../../images/ic_Search.png';
import iconHandCheck from '../../images/Logo_ML.png';

import {getItemsAction} from '../../redux/items.ducks';
import { getItemsDetailAction } from '../../redux/itemDetail.ducks';

export default function Search() {
  const dispatch = useDispatch();
  let history = useHistory();

  const [searchTerm, setSearchTerm] = useState("maleta");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  function handleClick() {
    dispatch(getItemsDetailAction(null));
    dispatch(getItemsAction(searchTerm));
    history.push("/items?search=" + searchTerm);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="containerSearch">
      <div className="divSearch" >
        <img className="imgHand" src={iconHandCheck} alt="hand"/>
        <div className="divInput">
          <input type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="inputSearh"
            id="input"
          />
          <i className = "imgSearch" onClick={handleClick}>
            <img src={iconSearch} alt="search"/>
          </i>
        </div>
      </div>
    </div>
  );
}