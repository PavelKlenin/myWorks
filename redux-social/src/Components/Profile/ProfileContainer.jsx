import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../../Redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.authId;
    this.props.getProfile(userId);
  }

  render() {
    return this.props.isFetched ? (
      <Profile {...this.props.profile} />
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.profile,
    authId: state.auth.authProfile ? state.auth.authProfile.userId : 2,
  };
};

const mapDispatchToProps = {
  getProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
