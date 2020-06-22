const {
  postsReducer,
  sendPost,
  updatePostText,
  deletePost,
} = require("./postsReducer");

const state = {
  posts: [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio aliquam, enim ipsa ipsum maxime.",
    },
    {
      id: 2,
      text:
        "Distinctio ea quae iusto minus adipisci eius! Doloribus dolor minus sit culpa cupiditate adipisci commodi.",
    },
  ],
  newPostText: "",
};

test("SEND_POST action type should increase the length of the array", () => {
  const testState = { ...state, newPostText: "test" };
  const resultState = postsReducer(testState, sendPost());
  expect(resultState.posts.length).toBe(state.posts.length + 1);
});

test("New post should have id = 3", () => {
  const testState = { ...state, newPostText: "test" };
  const resultState = postsReducer(testState, sendPost());
  expect(resultState.posts[2].id).toBe(3);
});

test("SEND_POST action type should clean newPostText", () => {
  const testState = { ...state, newPostText: "test" };
  const resultState = postsReducer(testState, sendPost());
  expect(resultState.newPostText).toBe("");
});

test("UPDATE_POST action type should rewrite newPostText", () => {
  const testState = { ...state };
  const resultState = postsReducer(testState, updatePostText("test"));
  expect(resultState.newPostText).toBe("test");
});

test("DELETE_POST action type should decreasethe length of the array", () => {
  const testState = { ...state };
  const resultState = postsReducer(testState, deletePost(2));
  expect(resultState.posts.length).toBe(state.posts.length - 1);
});
