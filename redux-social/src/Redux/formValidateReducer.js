import { postValidate } from "../utils/formValidations/postFormValidation";
import { compose } from "redux";

// Const
const TOGGLE_POST_BTN = "formValidateReducer/TOGGLE_POST_BTN";
const CHECK_MAX_POST_LENGTH = "formValidateReducer/CHECK_MAX_POST_LENGTH";

// State
const initialState = {
  newPostForm: {
    maxLength: 5,
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
        }
      };
    default:
      return state;
  }
};

// ActionCreactors
export const togglePostBtn = (isDisabled) => ({
  type: TOGGLE_POST_BTN,
  isDisabled,
});

export const exceedPostLength = (isExceeded) => ({
  type: CHECK_MAX_POST_LENGTH,
  isExceeded,
});

export const checkPost = (maxLength = 0, postText = '') => (dispatch) => {
  compose(
    dispatch,
    togglePostBtn,
    postValidate.disableSendBtn(maxLength)
  )(postText);
  compose(
    dispatch,
    exceedPostLength,
    postValidate.maxValue(maxLength)
  )(postText);
}
