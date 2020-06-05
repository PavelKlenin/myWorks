import React from "react";
import LoginForm from "./LoginForm";
import s from "./LoginForm.module.css";

const Login = () => {
  const onSubmit = (dataForm) => console.log("Login -> dataForm", dataForm);
  return (
    <div className={s.loginPage}>
      <h1 className={s.loginTitle} >Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
