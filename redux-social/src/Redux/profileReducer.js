import { API } from "../api/api";

// Const
const LOAD_PROFILE = 'LOAD_PROFILE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

// State
const initialState = {
  profile: null,
  isFetched: false,
};

// Reducer
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {...state, profile: action.profile};
      case TOGGLE_FETCHING:
      return {...state, isFetched: action.isFetched};
    default:
      return state;
  }
}

// ActionCreators
export const loadProfile = (profile) => ({
  type: LOAD_PROFILE,
  profile,
});

export const toggleFetching = (isFetched) => ({
  type: TOGGLE_FETCHING,
  isFetched,
})

// ThunkCreators

export const getProfile = (userId) => (dispatch) => {
  API.getProfile(userId).then((data) => {
    dispatch(loadProfile(data));
    dispatch(toggleFetching(true));
  });
}
