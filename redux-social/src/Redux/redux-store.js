import { createStore, combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { contactsReducer } from './contactsReducer';
import { authReducer } from "./authReducer";

export const reducers = combineReducers({
  profile: profileReducer,
  news: newsReducer,
  dialogs: dialogsReducer,
  contacts: contactsReducer,
  auth: authReducer,
});

const reduxStore = createStore(reducers);

export default reduxStore;