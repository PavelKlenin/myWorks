import {OPEN_SLIDER, PREV_SLIDE, NEXT_SLIDE, CLOSE_SLIDER} from '../actions/SliderActions';

const initialState = {
  index: null,
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
    case PREV_SLIDE:
      return {
        ...state,
        index: action.payload.i,
      };
    case NEXT_SLIDE:
      return {
        ...state,
        index: action.payload.i,
      };
    case CLOSE_SLIDER:
      return initialState;
    default:
      return state;
  }
}
