import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Sidebar from "./Components/Sidebar/Sidebar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";
import ContactsContainer from "./Components/Contacts/ContactsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderContainer />
        <Banner />
        <Sidebar />
        <div className="appContent">
          <Navbar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <NewsContainer />} />
          <Route path="/contacts" render={() => <ContactsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
