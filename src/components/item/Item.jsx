import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Search from '../search/Search';

import './Item.scss';
import iconShipping from '../../images/ic_shipping.png';



export default function Items() {
  const items = useSelector(store => store.items.array);

  const showShipping  = ( shipping ) => {
    let response = <i></i>;
    if(shipping === true){
      response = <img className="imgCar"
                        src={iconShipping} 
                        alt="shipping"
                  />
    }
    return response;
  }

  const showCity = ( city ) => {
    let response = <i></i>;
    if(city){
      response = <label className="labelCity">{city}</label>
    }
    return response;
  }
  console.log(items.length)
  let itemList = items !== undefined && items.length != 0 ? items.map(item => {

    return <Link key={item.id} to={"/items/" + item.id}>
      <div className="containerItem" to={"/items/" + item.id} >
        <img  key={item.id}
              value={item.id}
              type="image"
              src={item.picture}
              alt="Submit"
              width="180" 
              height="180"
              className="iItem"
        />
        <div className="containerText">
            <div className="containerTextValue">
              <label className="labelPrice">$ {item.price.amount}</label>
              <i>{showShipping(item.free_shipping)}</i>
            </div>
            <label className="labelTitle">{item.title}</label>
        </div>
        <div className="containerCity">
          {showCity(item.city)}
        </div>
      </div>
    </Link>
  }) : [];

  return (
    <div >
      <Search/>
      <div className="containerApp">
        <ul>
          {itemList}
        </ul>
      </div>
    </div>
  );
}