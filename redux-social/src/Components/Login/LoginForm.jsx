import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './LoginForm.module.css';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="login">Login: </label>
        <Field className={s.inputLogin} component='input' placeholder='login' name='login' />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <Field className={s.inputPass} component='input' placeholder='password' name='password'/>
      </div>
      <div>
        <label htmlFor="checkbox">Remember me: </label>
        <Field component='input' type='checkbox' name='checkbox'/>
      </div>
        <button className={s.loginBtn}>Login</button>
    </form>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'loginForm'
})(LoginForm);