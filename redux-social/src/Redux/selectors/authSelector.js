export const selectAuthedId =(state) => {
  return state.auth.id;
}

export const selectAuthIsLogged = (state) => {
  return state.auth.isLogged;
}

export const selectAuthedProfile = (state) => {
  return state.auth.myProfile;
}