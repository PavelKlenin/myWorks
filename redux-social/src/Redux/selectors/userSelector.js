export const selectAllUsers = (state) => {
  return state.contacts.users;
}

export const selectUsersCount = (state) => {
  return state.contacts.totalUsers;
}

export const selectIsFetching = (state) => {
  return state.contacts.isFetching;
}

export const selectPageSize = (state) => {
  return state.contacts.pageSize;
}

export const selectFollowingInProgress = (state) => {
  return state.contacts.followingInProgress;
}

export const selectCurrentPage = (state) => {
  return state.contacts.currentPage;
}

export const selectPaginatorSize = (state) => {
  return state.contacts.paginatorSize;
}