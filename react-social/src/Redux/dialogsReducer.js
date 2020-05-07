const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  users: [
    {
      id: 2,
      name: "Ivan",
      avatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/9dc640d94f324994c9ce31b1407a1830.png",
    },
    {
      id: 3,
      name: "Maria",
      avatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/9dc640d94f324994c9ce31b1407a1830.png",
    },
    {
      id: 4,
      name: "Anna",
      avatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/9dc640d94f324994c9ce31b1407a1830.png",
    },
    {
      id: 5,
      name: "Pavel",
      avatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/9dc640d94f324994c9ce31b1407a1830.png",
    },
    {
      id: 6,
      name: "Leonid",
      avatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/9dc640d94f324994c9ce31b1407a1830.png",
    },
  ],
  newMessage: "",
  messages: ["Hi", "Hello", "Bye"],
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      state.newMessage = action.text;
      return state;
    case SEND_MESSAGE:
      state.messages = [...state.messages, state.newMessage];
      state.newMessage = '';
      return state;
    default:
      return state;
  }
};

export const changeMessageCreator = (text) => ({
  type: CHANGE_MESSAGE,
  text: text,
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });