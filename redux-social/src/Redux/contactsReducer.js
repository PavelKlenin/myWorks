import { API } from "../api/api";

// Const
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const GET_CONTACTS = "GET-CONTACTS";
const GET_CONTACTS_COUNT = "GET_CONTACTS_COUNT";
const CHANGE_PAGE = "CHANGE_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";

// State
const initialState = {
  users: [],
  totalUsers: 0,
  pageSize: 8,
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
        users: state.users.map((user) => {
          return user.id === action.userID
            ? { ...user, followed: !user.followed }
            : { ...user };
        }),
      };
    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
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
export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true));
  API.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleFetching(false));
    dispatch(getContacts(data.items));
    dispatch(getContactsCount(data.totalCount));
  });
};

export const loadPage = (pageNumber, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true));
  dispatch(changePage(pageNumber));
  API.getUsers(pageNumber, pageSize).then((data) => {
    dispatch(toggleFetching(false));
    dispatch(getContacts(data.items));
  });
};

export const toggleFollowUser = (userId) => (dispatch) => {
  API.checkFollow(userId).then((data) => {
    if (data) {
      dispatch(toggleFollowBtn(true, userId));
      API.unfollow(userId).then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollow(userId));
          dispatch(toggleFollowBtn(false, userId));
        }
      });
    } else {
      dispatch(toggleFollowBtn(true, userId));
      API.follow(userId).then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollow(userId));
          dispatch(toggleFollowBtn(false, userId));
        }
      });
    }
  });
};
