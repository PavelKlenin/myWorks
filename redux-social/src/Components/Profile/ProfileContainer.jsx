import React from "react";
import { connect } from "react-redux";
import {
  getProfile,
  getProfileStatus,
  updateProfilestatus,
} from "../../Redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.authId;
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return this.props.isFetched ? (
      <Profile {...this.props.profile} status={this.props.status} updateProfilestatus={this.props.updateProfilestatus}/>
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.profile,
    authId: state.auth.id,
  };
};

const mapDispatchToProps = {
  getProfile,
  getProfileStatus,
  updateProfilestatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
