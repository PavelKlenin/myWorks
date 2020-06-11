import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutProfile } from "../../Redux/authReducer";
import { getProfile } from "../../Redux/profileReducer";
import { selectAuthedId, selectAuthIsLogged } from "../../Redux/selectors/authSelector";
import { selectUserProfile } from "../../Redux/selectors/profileSelector";

class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.isLogged && this.props.isLogged !== prevProps.isLogged) {
      this.props.getProfile(this.props.userId);
    }
  }

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
  profile: selectUserProfile(state),
  isLogged: selectAuthIsLogged(state),
});

const mapDispatchToProps = {
  logoutProfile,
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
