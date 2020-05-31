import { userAPI, profileAPI } from "../api/api";

// Const
const LOAD_PROFILE = "LOAD_PROFILE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SET_STATUS = "SET_STATUS";

// State
const initialState = {
  profile: null,
  status: "",
  isFetched: false,
};

// Reducer
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return { ...state, profile: action.profile };
    case TOGGLE_FETCHING:
      return { ...state, isFetched: action.isFetched };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

// ActionCreators
export const loadProfile = (profile) => ({
  type: LOAD_PROFILE,
  profile,
});

export const toggleFetching = (isFetched) => ({
  type: TOGGLE_FETCHING,
  isFetched,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// ThunkCreators

export const getProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId).then((data) => {
    dispatch(loadProfile(data));
    dispatch(toggleFetching(true));
  });
};

export const getProfileStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data.data));
  });
};

export const updateProfilestatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  })
}
