import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/UserActions';

const initialState = {
  name: '',
  error: '',
  loading: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, error: '', loading: true,};
    case LOGIN_SUCCESS:
      return {...state, name: action.payload, loading: false,}
    case LOGIN_FAIL:
      return {...state, error: action.payload.message, loading: false,};
    default:
      return state;
  }
}