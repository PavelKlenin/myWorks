import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Banner from "./Components/Banner/Banner";
import Sidebar from "./Components/Sidebar/Sidebar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";

import "./App.css";

function App(props) {
  const { profile } = props.state;
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Banner />
        <Sidebar {...profile} />
        <div className="appContent">
          <Navbar />
          <Route path="/profile" render={() => <Profile {...profile} />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <NewsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
