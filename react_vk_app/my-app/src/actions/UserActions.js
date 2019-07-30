export const LOGIN_REQUEST = 'LOGIN_REQUEST'; 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const handleLogin = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    // eslint-disable-next-line no-undef
    VK.Auth.login(response => {
      if (response.session) {
        /* Пользователь успешно авторизовался */
        let username = response.session.user.first_name;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        /* Пользователь нажал кнопку Отмена в окне авторизации */
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4);
  }
}