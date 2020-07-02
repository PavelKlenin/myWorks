import { userAPI } from "../api/api";
import { toggleObjInArr, updateArray } from "./../utils/helpers/objectsHelpers";

// Const
const TOGGLE_FOLLOW = "contactsReducer/TOGGLE-FOLLOW";
const GET_CONTACTS = "contactsReducer/GET-CONTACTS";
const GET_CONTACTS_COUNT = "contactsReducer/GET_CONTACTS_COUNT";
const CHANGE_PAGE = "contactsReducer/CHANGE_PAGE";
const TOGGLE_FETCHING = "contactsReducer/TOGGLE_FETCHING";
const FOLLOWING_PROGRESS = "contactsReducer/FOLLOWING_PROGRESS";

// State
const initialState = {
  users: [],
  totalUsers: 0,
  pageSize: 8,
  paginatorSize: 5,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

// Reducer
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: toggleObjInArr(state.users, "id", action.userID, "followed"),
      };
    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: updateArray(state.followingInProgress, [
          action.followingInProgress,
          action.userId,
        ]),
      };
    case GET_CONTACTS:
      return { ...state, users: [...action.users] };
    case GET_CONTACTS_COUNT:
      return { ...state, totalUsers: action.count };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

// ActionCreators
export const toggleFollow = (id) => ({ type: TOGGLE_FOLLOW, userID: id });
export const toggleFollowBtn = (followingInProgress, userId) => ({
  type: FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});
export const getContacts = (users) => ({ type: GET_CONTACTS, users });
export const getContactsCount = (count) => ({
  type: GET_CONTACTS_COUNT,
  count,
});
export const changePage = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber });
export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});

// ThunkCreators
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleFetching(true));
  const data = await userAPI.getUsers(currentPage, pageSize);
  dispatch(toggleFetching(false));
  dispatch(getContacts(data.items));
  dispatch(getContactsCount(data.totalCount));
};

export const loadPage = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleFetching(true));
  dispatch(changePage(pageNumber));
  const data = await userAPI.getUsers(pageNumber, pageSize);
  dispatch(toggleFetching(false));
  dispatch(getContacts(data.items));
};

const followUnfollowProgress = async (dispatch, userId, followAPI) => {
  const responce = await followAPI(userId);
  if (responce.resultCode === 0) {
    dispatch(toggleFollow(userId));
    dispatch(toggleFollowBtn(false, userId));
  }
};

export const toggleFollowUser = (userId) => async (dispatch) => {
  dispatch(toggleFollowBtn(true, userId));
  const data = await userAPI.checkFollow(userId);
  if (data) {
    followUnfollowProgress(dispatch, userId, userAPI.unfollow);
  } else {
    followUnfollowProgress(dispatch, userId, userAPI.follow);
  }
};
