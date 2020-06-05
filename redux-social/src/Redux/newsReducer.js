const UPDATE_POST = "UPDATE-POST";
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
  newPostText: '',
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_POST:
      const newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.newPostText
      }
    default:
      return state;
  }
};

export const sendPost = () => ({ type: SEND_POST });
export const updatePostText = (newPostText) => ({ type: UPDATE_POST, newPostText });
