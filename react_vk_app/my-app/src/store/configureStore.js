import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history),
  applyMiddleware(thunk, logger, routerMiddleware(history)),
);

