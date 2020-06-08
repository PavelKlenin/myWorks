import React from "react";
import { connect } from "react-redux";
import {
  getProfile,
  updateProfilestatus,
} from "../../Redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.authId;
    this.props.getProfile(userId);
  }

  componentDidUpdate(prevProps) {
    const userId = this.props.match.params.userId
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getProfile(userId);
    }
  }

  render() {
    return this.props.isFetched ? (
      <Profile
        {...this.props.profile}
        status={this.props.status}
        updateProfilestatus={this.props.updateProfilestatus}
      />
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
  updateProfilestatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);
