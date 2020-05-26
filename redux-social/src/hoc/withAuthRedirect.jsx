import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const withAuthRedirect = (Component) => {
  class withAuthRedirect extends React.Component {
    render() {
      return this.props.isLogged ? (
        <Component {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  }

  return connect(mapStateToProps)(withAuthRedirect);
};

export default withAuthRedirect;
