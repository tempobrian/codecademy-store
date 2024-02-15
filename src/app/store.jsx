import { createStore, combineReducers } from 'redux';

import { inventoryReducer } from '../features/inventory/inventorySlice';
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
// Create and export the store here.

const reducers = {
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);