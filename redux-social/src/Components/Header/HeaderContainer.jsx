import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { checkAuthProfile } from "../../Redux/authReducer";
import { getProfile } from "../../Redux/profileReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.checkAuthProfile().then(() => {
      if (this.props.isLogged) {
        this.props.getProfile(this.props.userId);
      }
    });
  }

  render() {
    return <Header profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.id,
  profile: state.profile.profile,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {
  checkAuthProfile,
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
