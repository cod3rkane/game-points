import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { Board } from './board';
import { Bonus } from './bonus';
import { Inventory } from './inventory';
import { Score } from './score';

const reducers = combineReducers({
  Board,
  Bonus,
  Inventory,
  Score
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
: compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware)
  // other store enhancers if any
);

export default createStore(reducers, enhancer);
