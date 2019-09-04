export const OPEN_SLIDER = 'OPEN_SLIDER';
export const CLOSE_SLIDER ='CLOSE_SLIDER';
export const PREV_SLIDE = 'PREV_SLIDE';
export const NEXT_SLIDE = 'NEXT_SLIDE';

export function openSlider(bigPhotos, i) {
  return (dispatch) => {
    dispatch({
      type: OPEN_SLIDER,
      payload: {bigPhotos, i}
    })
  }
}

export function prevSlide(photos, i) {
  --i;

  if (i < 0) {
    i = photos.length-1;
  }

  return (dispatch) => {
    dispatch({
      type: PREV_SLIDE,
      payload: {i}
    })
  }
}

export function nextSlide(photos ,i) {
  ++i;

  if (i >= photos.length) {
    i = 0;
  }

  return (dispatch) => {
    dispatch({
      type: NEXT_SLIDE,
      payload: {i}
    })
  }
}

export function closeSlider() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_SLIDER,
    })
  }
}