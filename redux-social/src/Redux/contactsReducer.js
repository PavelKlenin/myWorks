const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const GET_CONTACTS = "GET-CONTACTS";

const initialState = {users: []};

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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const toggleFollowAC = (id) => ({ type: TOGGLE_FOLLOW, userID: id });

export const getContactsAC = (users) => ({ type: GET_CONTACTS, users });
