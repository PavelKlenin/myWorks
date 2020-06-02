const SEND_POST = "SEND-POST";

const initialState = {
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
};

export const newsReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SEND_POST:
      const newPost = {
        id: state.posts.length + 1,
        text: action.newPostText,
      };
      newState.posts = [...state.posts, newPost];
      return newState;
    default:
      return state;
  }
};

export const sendPost = (newPostText) => ({ type: SEND_POST, newPostText });
