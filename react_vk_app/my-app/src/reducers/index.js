import {combineReducers} from 'redux';
import {pageReducer} from './page';
import {userReducer} from './user';
import {connectRouter} from 'connected-react-router';



export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  page: pageReducer,
  user: userReducer,
});