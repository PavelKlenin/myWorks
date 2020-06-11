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
import { appInit } from "./Redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import { compose } from "redux";
import { selectAuthedId } from "./Redux/selectors/authSelector";
import { selectAppInit } from './Redux/selectors/appSelector';

class App extends React.Component {
  componentDidMount() {
    this.props.appInit();
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
  initialized: selectAppInit(state),
  userId: selectAuthedId(state),
});

const mapDispatchToProps = {
  appInit,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
