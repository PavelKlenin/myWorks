import React from "react";
import { connect } from "react-redux";
import { loadProfile, toggleFetching } from "../../Redux/profileReducer";
import * as axios from "axios";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.loadProfile(response.data);
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
  return { ...state.profile };
};

const mapDispatchToProps = {
  loadProfile,
  toggleFetching,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
