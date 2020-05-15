import React from "react";
import { connect } from "react-redux";
import { loadProfile, toggleFetching } from "../../Redux/profileReducer";
import * as axios from "axios";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
        this.props.toggleFetching(true);
        axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => {
        this.props.loadProfile(response.data);
        this.props.toggleFetching(false);
      });
  }

  render() {
    return !this.props.isFetching ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
