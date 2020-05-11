const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const GET_CONTACTS = "GET-CONTACTS";
const GET_CONTACTS_COUNT = "GET_CONTACTS_COUNT";
const CHANGE_PAGE = "CHANGE_PAGE";

const initialState = {
  users: [],
  totalUsers: 0,
  pageSize: 8,
  currentPage: 1,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.userID
            ? { ...user, isFollowed: !user.isFollowed }
            : { ...user };
        }),
      };
    case GET_CONTACTS:
      return { ...state, users: [...action.users] };
    case GET_CONTACTS_COUNT:
      return { ...state, totalUsers: action.count };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.pageNumber };
    default:
      return state;
  }
};

export const toggleFollowAC = (id) => ({ type: TOGGLE_FOLLOW, userID: id });

export const getContactsAC = (users) => ({ type: GET_CONTACTS, users });

export const getContactsCountAC = (count) => ({
  type: GET_CONTACTS_COUNT,
  count,
});

export const changePageAC = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber });
