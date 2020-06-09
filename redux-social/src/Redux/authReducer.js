import { authAPI } from "../api/api";
import { getProfile } from './profileReducer';
import { SubmissionError } from "redux-form";

// Const
const SET_USER_DATA = "GET_USER_DATA";

// State
const initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
};

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

// ActionCreactors
export const setUserData = (id, email, login, isLogged) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isLogged },
});

// ThunkCreactors
export const checkAuthProfile = () => (dispatch) => {
  return authAPI.authCheck().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserData(id, email, login, true));
      dispatch(getProfile(id))
    } else {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export const loginProfile = (email, password, rememberMe) => (dispatch) => {
  return authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(checkAuthProfile());
    } else {
      //TODO stopSubmit() redux-form
      throw new SubmissionError({
        _error: 'Wrong login or password'
      })
    }
  });
};

export const logoutProfile = () => (dispatch) => {
  return authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(checkAuthProfile());
    }
  });
};