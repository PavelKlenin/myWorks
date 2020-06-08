import React from "react";
import { Route, withRouter } from "react-router-dom";

import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Sidebar from "./Components/Sidebar/Sidebar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";
import ContactsContainer from "./Components/Contacts/ContactsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

import "./App.css";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/authReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import { compose } from "redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return this.props.initialized ? (
      <div className="app">
        <HeaderContainer />
        <Banner />
        <Sidebar />
        <div className="appContent">
          <Navbar userId={this.props.userId} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <NewsContainer />} />
          <Route path="/contacts" render={() => <ContactsContainer />} />
        </div>
      </div>
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.auth.isInitialized,
  userId: state.auth.id,
});

const mapDispatchToProps = {
  initializeApp,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
