import { authAPI } from "../api/api";
import { getProfile } from './profileReducer';

// Const
const SET_USER_DATA = "GET_USER_DATA";
const IS_INITIALIZED = "IS_INITIALIZED";

// State
const initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
  isInitialized: false,
};

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case IS_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
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

const setInitialization = () => ({
  type: IS_INITIALIZED,
})

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
      console.log('Login error')
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


export const initializeApp = () => (dispatch) => {
  Promise.all([checkAuthProfile()]).then(() => {
    dispatch(setInitialization());
  })
}