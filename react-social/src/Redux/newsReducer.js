const CHANGE_POST = "CHANGE-POST";
const SEND_POST = "SEND-POST";

const initialState = {
  posts: [ {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio aliquam, enim ipsa ipsum maxime.",
  },
  {
    id: 2,
    text: "Distinctio ea quae iusto minus adipisci eius! Doloribus dolor minus sit culpa cupiditate adipisci commodi.",
  },
  ],
  newPostText: '',
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST:
      state.newPostText = action.text;
      return state;
    case SEND_POST:
      const newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
      }
      state.posts = [...state.posts, newPost];
      state.newPostText = '';
      return state;
    default:
      return state;
  }
};

export const changePostCreator = (text) => ({
  type: CHANGE_POST,
  text: text,
});
export const sendPostCreator = () => ({ type: SEND_POST });