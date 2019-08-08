import { push } from 'connected-react-router';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'; 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const STATUS_CONNECTED = 'STATUS_CONNECTED';
export const STATUS_REQUEST = 'STATUS_REQUEST';
export const STATUS_FAIL = 'STATUS_FAIL';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'; 
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';


export const handleLogin = (year) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })
    // eslint-disable-next-line no-undef
    VK.Auth.login(response => {
      if (response.session) {
        /* Пользователь успешно авторизовался */
        let username = response.session.user.first_name;
        let domain = response.session.user.domain;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        });
        dispatch(push(`/${domain}/${year}`));
      } else {
        /* Пользователь нажал кнопку Отмена в окне авторизации */
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        });
      }
    }, 4);
  }
}

export const getLoginStatus = (year) => {
  return dispatch => {
    dispatch({
      type: STATUS_REQUEST,
    })
    // eslint-disable-next-line no-undef
    VK.Auth.login(response => {
      if (response.status === 'connected') {
        let username = response.session.user.first_name;
        let domain = response.session.user.domain;
        dispatch({
          type: STATUS_CONNECTED,
          payload: username,
        });
        dispatch(push(`/${domain}/${year}`));
      } else {
        dispatch({
          type: STATUS_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        });
      }
    });
  }
}

export const handleLogout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
    // eslint-disable-next-line no-undef
    VK.Auth.logout(response => {
      if (response.session === null) {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        dispatch(push('/'));
      } else {
        dispatch({
          type: LOGOUT_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4);
    
  }
}

