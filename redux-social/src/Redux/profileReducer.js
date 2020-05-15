const LOAD_PROFILE = 'LOAD_PROFILE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


const initialState = {
  profile: null,
  isFetching: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {...state, profile: action.profile};
      case TOGGLE_FETCHING:
      return {...state, isFetching: action.isFetching};
    default:
      return state;
  }
}

export const loadProfile = (profile) => ({
  type: LOAD_PROFILE,
  profile,
});

export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
})


