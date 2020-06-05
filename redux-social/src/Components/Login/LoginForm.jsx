import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./LoginForm.module.css";
import LoginInput from "./LoginInput";
import { required } from "../../utils/formValidations/loginFormValidation";

const LoginForm = (props) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      <Field
        component={LoginInput}
        name="login"
        label="Login"
        validate={[required]}
      />
      <Field
        component={LoginInput}
        name="password"
        label="Password"
        validate={[required]}
      />
      <div className={s.inputBlock}>
        <label htmlFor="checkbox">Remember me: </label>
        <Field className={s.checkbox} component="input" type="checkbox" name="checkbox" />
      </div>
      <div className={s.inputBlock}>
        <button className={s.loginBtn} disabled={props.submitting}>
          Login
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "loginForm",
})(LoginForm);
