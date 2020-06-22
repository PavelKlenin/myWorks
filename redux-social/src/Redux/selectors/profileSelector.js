export const selectUserProfile = (state) => {
  return state.profile.profile;
};

export const selectUserAvatar = (state) => {
  return selectUserProfile(state) ? state.profile.profile.photos.large : null;
};

export const selectUserStatus = (state) => {
  return state.profile.status;
};

export const selectIsProfileFetched = (state) => {
  return state.profile.isFetching;
};
