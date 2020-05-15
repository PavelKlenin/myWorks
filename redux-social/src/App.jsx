import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
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
        <Header />
        <Banner />
        <Sidebar />
        <div className="appContent">
          <Navbar />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <NewsContainer />} />
          <Route path="/contacts" render={() => <ContactsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
