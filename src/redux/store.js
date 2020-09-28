import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Imports All ducks
import itemsReducer from './items.ducks';
import itemDetailReducer from './itemDetail.ducks';

const rootReducer = combineReducers({
  items: itemsReducer,
  itemDetail: itemDetailReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// funcion para generara el storage
// eslint-disable-next-line require-jsdoc
export default function generateStore() {
  const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk)));
  return store;
}