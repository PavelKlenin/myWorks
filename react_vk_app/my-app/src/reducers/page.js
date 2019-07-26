import {GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS} from '../actions/PageActions';

const initialState = {
  year: 2018,
  photos: [],
  loading: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return {...state, year: action.payload, loading: true};
    case GET_PHOTO_SUCCESS:
      return {...state, photos: action.payload, loading: false};

    default:
      return state;
  }
}
