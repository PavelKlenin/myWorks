import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { getUserData, toggleLogging } from "../../Redux/authReducer";
import { loadProfile, toggleFetching } from "../../Redux/profileReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          this.props.getUserData(id, email, login);
          this.props.toggleLogging();
          return id;
        }
      })
      .then((id) => {
        if (this.props.isLogged) {
          axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then((response) => {
              this.props.loadProfile(response.data);
            });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return <Header {...this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {
  getUserData,
  toggleLogging,
  loadProfile,
  toggleFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
