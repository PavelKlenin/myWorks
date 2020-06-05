import { disableSendBtn, maxValue } from "../utils/formValidations/postFormValidation";

// Const
const TOGGLE_BTN_DISABLE = "TOGGLE_BTN_DISABLE";
const CHECK_MAX_LENGTH = "CHECK_MAX_LENGTH";

// State
const initialState = {
  btnDisabled: true,
  maxLengthExceeded: false,
};

// Reducer
export const myFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BTN_DISABLE:
      return {
        ...state,
        btnDisabled: action.isDisabled,
      };
    case CHECK_MAX_LENGTH:
      return {
        ...state,
        maxLengthExceeded: action.isExceeded,
      };
    default:
      return state;
  }
};

// ActionCreactors
export const toggleSendBtn = (isDisabled) => ({
  type: TOGGLE_BTN_DISABLE,
  isDisabled,
});

export const checkMaxLength = (isExceeded) => ({
  type: CHECK_MAX_LENGTH,
  isExceeded,
});

// ThunkCreactors
export const checkForm = (text) => (dispatch) => {

      //TODO dispatch(checkMaxLength(maxValue()));
      dispatch(toggleSendBtn(disableSendBtn(text)))
};
