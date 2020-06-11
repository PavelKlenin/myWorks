export const selectPosts =(state) => {
  return state.news.posts;
}

export const selectNewPostText = (state) => {
  return state.news.newPostText;
}