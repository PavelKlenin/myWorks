import { createStore, combineReducers, applyMiddleware } from "redux";
import { newsReducer } from "./newsReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { contactsReducer } from './contactsReducer';
import { authReducer } from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import thunk from "redux-thunk";
import { formValidateReducer } from "./formValidateReducer";
import { appReducer } from "./appReducer";

export const reducers = combineReducers({
  profile: profileReducer,
  news: newsReducer,
  dialogs: dialogsReducer,
  contacts: contactsReducer,
  auth: authReducer,
  form: formReducer,
  myForm: formValidateReducer,
  app: appReducer,
});

const reduxStore = createStore(reducers, applyMiddleware(thunk));

export default reduxStore;