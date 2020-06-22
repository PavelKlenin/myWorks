const SEND_MESSAGE = "dialogsReducer/SEND-MESSAGE";

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
  ],
  messages: ["Hi", "Hello", "Bye"],
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.newMessage]
      }
    default:
      return state;
  }
};

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });