import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserData, toggleLogging, getAuthProfile } from "../../Redux/authReducer";
import { API } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    API.authCheck()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          this.props.getUserData(id, email, login);
          this.props.toggleLogging();
          return id;
        }
      })
      .then((id) => {
        if (this.props.isLogged) {
          API.getProfile(id)
            .then((data) => {
              this.props.getAuthProfile(data);
            });
        }
      })
  }

  render() {
    return <Header  profile ={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth.authProfile,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {
  getUserData,
  toggleLogging,
  getAuthProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
