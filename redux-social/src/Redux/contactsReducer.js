const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const GET_CONTACTS = "GET-CONTACTS";
const GET_CONTACTS_COUNT = "GET_CONTACTS_COUNT";
const CHANGE_PAGE = "CHANGE_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

const initialState = {
  users: [],
  totalUsers: 0,
  pageSize: 8,
  currentPage: 1,
  isFetching: false,
};

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

export const toggleFollow = (id) => ({ type: TOGGLE_FOLLOW, userID: id });

export const getContacts = (users) => ({ type: GET_CONTACTS, users });

export const getContactsCount = (count) => ({
  type: GET_CONTACTS_COUNT,
  count,
});

export const changePage = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching});
