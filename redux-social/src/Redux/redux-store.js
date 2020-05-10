import { createStore, combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { contactsReducer } from './contactsReducer';

export const reducers = combineReducers({
  profile: profileReducer,
  news: newsReducer,
  dialogs: dialogsReducer,
  contacts: contactsReducer,
});

const reduxStore = createStore(reducers);

export default reduxStore;