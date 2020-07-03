import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutProfile } from "../../Redux/authReducer";
import { selectAuthedId, selectAuthIsLogged, selectAuthedProfile } from "../../Redux/selectors/authSelector";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        profile={this.props.profile}
        isLogged={this.props.isLogged}
        logoutProfile={this.props.logoutProfile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: selectAuthedId(state),
  profile: selectAuthedProfile(state),
  isLogged: selectAuthIsLogged(state),
});

const mapDispatchToProps = {
  logoutProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
