export const selectPosts =(state) => {
  return state.posts.posts;
}

export const selectNewPostText = (state) => {
  return state.posts.newPostText;
}