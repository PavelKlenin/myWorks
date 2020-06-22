import { userAPI, profileAPI } from "../api/api";

// Const
export const LOAD_PROFILE = "profileReducer/LOAD_PROFILE";
export const SET_STATUS = "profileReducer/SET_STATUS";
export const TOGGLE_FETCHING = "profileReducer/TOGGLE_FETCHING";

// State
const initialState = {
  profile: null,
  status: "",
  isFetching: false,
};

// Reducer
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return { ...state, profile: action.profile };
    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };
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

export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// ThunkCreators

export const getProfile = (userId) => async (dispatch) => {
  dispatch(toggleFetching(true));
  const getProfileData = await userAPI.getProfile(userId);
  const getStatusData = await profileAPI.getStatus(userId);
  dispatch(loadProfile(getProfileData));
  dispatch(setStatus(getStatusData.data));
  dispatch(toggleFetching(false));
};

export const updateProfilestatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
