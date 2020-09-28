/* eslint-disable object-curly-spacing */
import { getItems } from '../services/getItems';

// const
const dataInicial = {
  array: [],
};

// types
const GET_ITEMS_LIST = 'GET_ITEMS_LIST';

// reducer
// eslint-disable-next-line require-jsdoc
export default function itemsReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ITEMS_LIST:
      return {...state, array: action.payload};
    default:
      return state;
  }
};

// action
export const getItemsAction = (textSearch) => async (dispatch, getState) => {
  let result = {};

  try {
    result = await getItems(textSearch);
    result = await result.items;

    dispatch({
      type: GET_ITEMS_LIST,
      payload: result,
    });
  } catch (e) {
    console.warn(e);
  }
};

