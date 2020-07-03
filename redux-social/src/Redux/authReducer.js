import { authAPI, userAPI } from "../api/api";
import { SubmissionError } from "redux-form";

// Const
const SET_USER_DATA = "authReducer/SET_USER_DATA";
const SET_MY_PROFILE = "authReducer/SET_MY_PROFILE";

// State
const initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
  myProfile: null, 
};

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.profile,
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

export const setMyProfile = (profile) => ({
  type: SET_MY_PROFILE,
  profile,
});

// ThunkCreactors
export const checkAuthProfile = () => async (dispatch) => {
  const data = await authAPI.authCheck();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
    const myProfile = await userAPI.getProfile(id);
    dispatch(setMyProfile(myProfile));
  } else {
    dispatch(setUserData(null, null, null, false));
    dispatch(setMyProfile(null));
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
