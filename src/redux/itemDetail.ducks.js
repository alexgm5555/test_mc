/* eslint-disable object-curly-spacing */
import { getDetail } from '../services/getDetail';

// const
const dataInicial = {
  array: [],
};

// types
const GET_ITEMS_DETAIL = 'GET_ITEMS_DETAIL';

// reducer
// eslint-disable-next-line require-jsdoc
export default function itemsReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ITEMS_DETAIL:
      return {...state, array: action.payload};
    default:
      return state;
  }
};



export const getItemsDetailAction = (item) => async (dispatch, getState) => {
  let result = {};

  try {
    if(item !== null){
      result = await getDetail(item);
      result = await result.item;
    }else{
      result = {};
    }

    dispatch({
      type: GET_ITEMS_DETAIL,
      payload: result,
    });
  } catch (e) {
    console.warn(e);
  }
};
