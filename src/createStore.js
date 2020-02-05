import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reduxTokenAuthReducer as reduxTokenAuth } from "redux-token-auth"
import * as reducers from './Reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      tokenAuthReducer: reduxTokenAuth,
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history)
    )
  );
}