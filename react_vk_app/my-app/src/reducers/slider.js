import {OPEN_SLIDER, CLOSE_SLIDER} from '../actions/PageActions';

const initialState = {
  index: '',
  photos: [],
  isOpen: false,
}

export function sliderReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SLIDER:
      return {
        ...state,
        index: action.payload.i,
        photos: action.payload.bigPhotos,
        isOpen: true,
      };
    case CLOSE_SLIDER:
      return initialState;
    default:
      return state;
  }
}
