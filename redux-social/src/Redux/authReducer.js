import { API } from "../api/api";

// Const
const TOGGLE_LOGGING = "TOGGLE_LOGGING";
const GET_USER_DATA = "GET_USER_DATA";
const GET_AUTH_PROFILE = "GET_AUTH_PROFILE";

// State
const initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
  authProfile: null,
};

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case GET_AUTH_PROFILE:
      return {
        ...state,
        authProfile: action.profile,
      };
    case TOGGLE_LOGGING:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

// ActionCreactors
export const setUserData = (id, email, login) => ({
  type: GET_USER_DATA,
  data: { id, email, login },
});
export const setAuthProfile = (profile) => ({ type: GET_AUTH_PROFILE, profile });
export const toggleLogging = () => ({ type: TOGGLE_LOGGING });

// ThunkCreactors
export const getAuthProfile = () => (dispatch) => {
  return API.authCheck()
  .then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserData(id, email, login));
      dispatch(toggleLogging());
      return id;
    }
  })
  .then((id) => {
    if (id) {
      API.getProfile(id)
      .then((data) => {
        dispatch(setAuthProfile(data));
      });
    }
  })
}
