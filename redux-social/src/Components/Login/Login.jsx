import React from "react";
import LoginForm from "./LoginForm";
import s from "./LoginForm.module.css";
import { connect } from "react-redux";
import { loginProfile } from "../../Redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (dataForm) => {
    return props.loginProfile(dataForm.email, dataForm.password, dataForm.rememberMe);
  }
  
  return (
    props.userID ? 
    <Redirect to={`/profile/${props.userID}`} /> :
    <div className={s.loginPage}>
      <h1 className={s.loginTitle} >Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userID: state.auth.id,
})

const mapDispatchToProps = {
  loginProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
