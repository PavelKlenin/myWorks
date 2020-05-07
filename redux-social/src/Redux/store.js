import { dialogsReducer } from "./dialogsReducer";
import { newsReducer } from './newsReducer';

const store = {
  _state: {
    profile: {
      avatar:
        "https://yt3.ggpht.com/a/AGF-l7-me_9j6Oh-cCxHzZHu9_rQDa3wkrXMDfa4HQ=s900-c-k-c0xffffffff-no-rj-mo",
      username: "User Name",
    },
    news: {
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
    },
    dialogs: {
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
    },
  },
  // _callSubscriber это не перерисовка, а уведомление подписчика, что state изменился
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.news = newsReducer(this._state.news, action);
    this._callSubscriber(this._state);
  },
};

export default store;
