import { createStore, combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

export const reducers = combineReducers({
  profile: profileReducer,
  news: newsReducer,
  dialogs: dialogsReducer,
});

const reduxStore = createStore(reducers);

export default reduxStore;