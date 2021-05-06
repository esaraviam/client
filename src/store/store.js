import { createStore, combineReducers } from 'redux';
import { shoppingReducer } from '../reducers/shoppingReducers';

const reducers = combineReducers({
  shopping: shoppingReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
