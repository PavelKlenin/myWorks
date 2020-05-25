import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthProfile } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthProfile();
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
  getAuthProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
