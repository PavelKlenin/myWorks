import {push} from 'connected-react-router';

export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST';
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const GET_PHOTO_FAIL = 'GET_PHOTO_FAIL';


let photosUnsort =[];
let cashed = false;

const makeYearPhotos = (photos, year) => {
  let givenYear, yearPhotos = [];
  photos.forEach(photo => {
    givenYear = new Date(photo.date*1000).getFullYear();
    if (givenYear === year) {
      yearPhotos = [...yearPhotos, photo];
    }
  });

  yearPhotos.sort((a, b) => {
    return b.likes.count - a.likes.count;
  })

  return yearPhotos;
}

const getMorePhotos = (offset, count, domain, year, dispatch) => {
  // eslint-disable-next-line no-undef
  VK.Api.call('photos.getAll',
    {extended: 1, offset: offset, count: count, v:"5.101"},
    response => {
      try {
        if (response) {
          photosUnsort = response.response.items;
          if (offset <= response.count) {
            offset +=200;
            getMorePhotos(offset, count, domain, year, dispatch);
          } else {
            let photos = makeYearPhotos(photosUnsort, year);
            cashed = true;
            dispatch({
              type: GET_PHOTO_SUCCESS,
              payload: photos,
            });
            dispatch(push(`/${domain}/${year}`));
          }
        }
      } catch (e) {
        dispatch({
          type: GET_PHOTO_FAIL,
          error: true,
          payload: e.message,
        })
      }
  })
}

export function getPhotos(domain, year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTO_REQUEST,
      payload: year,
    })
    
    if (cashed) {
      let photos = makeYearPhotos(photosUnsort, year);
      dispatch({
        type: GET_PHOTO_SUCCESS,
        payload: photos,
      })
      dispatch(push(`/${domain}/${year}`));
    } else {
      getMorePhotos(0, 200, domain, year, dispatch);
    }
  }

}

