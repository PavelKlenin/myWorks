import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Banner from "./Components/Banner/Banner";
import NewsContainer from "./Components/News/NewsContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

function App(props) {
  const { profile, news, dialogs, dispatch } = props;
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Banner />
        <Sidebar {...profile} />
        <div className="appContent">
          <Navbar />
          <Route path="/profile" render={() => <Profile {...profile} />} />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer dialogs={dialogs} dispatch={dispatch} />}
          />
          <Route
            path="/news"
            render={() => 
              <NewsContainer {...news} avatar={profile.avatar} dispatch={dispatch} />
            }
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
