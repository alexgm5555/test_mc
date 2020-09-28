import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';

import Search from '../search/Search';

import './Detail.scss';

import { getItemsDetailAction } from '../../redux/itemDetail.ducks';

export default function Detail() {

  const dispatch = useDispatch();
  const params = useParams();

  useEffect((e) => {
    dispatch(getItemsDetailAction(params.id));
  },[dispatch,params])

  let itemDetail = useSelector(store => store.itemDetail.array)

  let price = 0;
  if(itemDetail.price){
    price = itemDetail.price.amount
  }

  return (
    <div>
      <Search/>
      <div className="containerApp">
        <div className="containerfirst">
        <img  key={itemDetail.id}
                value={itemDetail.id}
                type="image"
                src={itemDetail.picture}
                alt="Submit"
                className="imgItem"
          />
          <div className="conteinerInfo">
            <h4 className="labelNew">
              {itemDetail.condition === 'new' ? "Nuevo" : undefined}
            </h4>
            <h3 className="labelTitle">
              {itemDetail.title}
            </h3>
            <h2 className="labelPrice">
              $ {price}
            </h2>
            <button className="buttonPay">Comprar</button>
          </div>
        </div>
        <div className="containerTextEnd">
          <h2 className="labelTitleDescr">Descipción del producto</h2>
          <h5 className="labelTexEnd">
            {itemDetail.description}
          </h5>
        </div>
      </div>  
    </div>
  );
}
