import React from "react";
import { connect } from "react-redux";
import { loadProfile, toggleFetching } from "../../Redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { API } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.authId;
    API.getProfile(userId).then((data) => {
      this.props.loadProfile(data);
      this.props.toggleFetching(true);
    });
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
  loadProfile,
  toggleFetching,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
