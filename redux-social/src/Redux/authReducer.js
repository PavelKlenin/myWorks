import { authAPI } from "../api/api";

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
        isLogged: true,
      };
    default:
      return state;
  }
};

// ActionCreactors
export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

// ThunkCreactors
export const checkAuthProfile = () => (dispatch) => {
  return authAPI.authCheck().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserData(id, email, login));
    }
  });
};
