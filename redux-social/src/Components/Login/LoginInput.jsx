import React from "react";
import s from "./LoginForm.module.css";

const LoginInput = (props) => {
  const {
    input,
    label,
    meta: { touched, error },
  } = props;

  return (
    <div className={s.inputBlock} >
      <input {...input}
        className={`${s.inputLogin}  ${touched && error && s.errorLogin}`}
        placeholder={label} />
      {touched && error && <span className={s.errorInput}>{error}</span>}
    </div>
  );
};

export default LoginInput;
