
// Const
const TOGGLE_POST_BTN = "TOGGLE_POST_BTN";
const CHECK_MAX_POST_LENGTH = "CHECK_MAX_POST_LENGTH";

// State
const initialState = {
  newPostForm: {
    maxLength: 50,
    btnDisabled: true,
    maxLengthError: false,
  }
};

// Reducer
export const formValidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POST_BTN:
      return {
        ...state,
        newPostForm: {
          ...state.newPostForm,
          btnDisabled: action.isDisabled,
        }
      };
    case CHECK_MAX_POST_LENGTH:
      return {
        ...state,
        newPostForm: {
          ...state.newPostForm,
          maxLengthError: action.isExceeded,
          btnDisabled: action.isExceeded,
        }
      };
    default:
      return state;
  }
};

// ActionCreactors
export const checkPostBtn = (isDisabled) => ({
  type: TOGGLE_POST_BTN,
  isDisabled,
});

export const checkPostLength = (isExceeded) => ({
  type: CHECK_MAX_POST_LENGTH,
  isExceeded,
});


