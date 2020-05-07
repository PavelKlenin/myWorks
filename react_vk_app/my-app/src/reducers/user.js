import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL,
  STATUS_FAIL, STATUS_REQUEST, STATUS_CONNECTED} from '../actions/UserActions';

const initialState = {
  name: '',
  error: '',
  loading: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case STATUS_REQUEST:
    case LOGOUT_REQUEST:
      return {...state, error: '', loading: true,};
    case LOGIN_SUCCESS:
    case STATUS_CONNECTED:
      return {
        ...state,
        name: action.payload,
        loading: false,
      }
    case LOGOUT_SUCCESS:
      return initialState;
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
    case STATUS_FAIL:
      return {...state, error: action.payload.message, loading: false,};
    default:
      return state;
  }
}