import { checkAuthProfile } from "./authReducer";

// Const
const IS_INITIALIZED = "IS_INITIALIZED";

// State
const initialState = {
  isInitialized: false,
};

// Reducer
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

// ActionCreactors
const setInit = () => ({
  type: IS_INITIALIZED,
});

// ThunkCreactors
export const appInit = () => (dispatch) => {
  Promise
    .all([
      dispatch(checkAuthProfile()),
    ])
    .then(() => {dispatch(setInit());});
};
