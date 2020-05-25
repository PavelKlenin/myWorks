import { createStore, combineReducers, applyMiddleware } from "redux";
import { newsReducer } from "./newsReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { contactsReducer } from './contactsReducer';
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";

export const reducers = combineReducers({
  profile: profileReducer,
  news: newsReducer,
  dialogs: dialogsReducer,
  contacts: contactsReducer,
  auth: authReducer,
});

const reduxStore = createStore(reducers, applyMiddleware(thunk));

export default reduxStore;