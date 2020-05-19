const LOAD_PROFILE = 'LOAD_PROFILE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


const initialState = {
  profile: null,
  isFetched: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {...state, profile: action.profile};
      case TOGGLE_FETCHING:
      return {...state, isFetched: action.isFetched};
    default:
      return state;
  }
}

export const loadProfile = (profile) => ({
  type: LOAD_PROFILE,
  profile,
});

export const toggleFetching = (isFetched) => ({
  type: TOGGLE_FETCHING,
  isFetched,
})


