const TOGGLE_LOGGING = "TOGGLE_LOGGING";
const GET_USER_DATA = "GET_USER_DATA";
export const API_KEY = 'e3f1e459-893d-4754-8a24-d11a9e2a9b60';

const initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        ...action.data,
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

export const getUserData = (id, email, login) => ({ type: GET_USER_DATA, data: {id, email, login} });
export const toggleLogging = () => ({type: TOGGLE_LOGGING})

