import { authAPI } from "../api/api";
import { getProfile } from "./profileReducer";
import { SubmissionError } from "redux-form";

// Const
const SET_USER_DATA = "authReducer/GET_USER_DATA";

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
export const checkAuthProfile = () => async (dispatch) => {
  const data = await authAPI.authCheck();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
    dispatch(getProfile(id));
  } else {
    dispatch(setUserData(null, null, null, false));
  }
};

export const loginProfile = (email, password, rememberMe) => async (
  dispatch
) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(checkAuthProfile());
  } else {
    throw new SubmissionError({
      _error: "Wrong login or password",
    });
  }
};

export const logoutProfile = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(checkAuthProfile());
  }
};
