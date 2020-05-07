import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.css";
import store from "./Redux/redux-store";

const renderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        {...state}
        // привязываем методы к контексту, чтобы не было ошибок контекста при вызове функции в дочерних элементах
        dispatch={store.dispatch.bind(store)} 
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
renderAll(store.getState());


store.subscribe( () => {
  const state = store.getState()
  renderAll(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
