const TOGGLE_LOGGING = "TOGGLE_LOGGING";
const GET_USER_DATA = "GET_USER_DATA";
const GET_AUTH_PROFILE = "GET_AUTH_PROFILE";

const initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
  authProfile: null,
};

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

export const getUserData = (id, email, login) => ({
  type: GET_USER_DATA,
  data: { id, email, login },
});
export const getAuthProfile = (profile) => ({ type: GET_AUTH_PROFILE, profile });
export const toggleLogging = () => ({ type: TOGGLE_LOGGING });
