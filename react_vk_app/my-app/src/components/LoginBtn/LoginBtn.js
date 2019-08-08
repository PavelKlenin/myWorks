import React from 'react';
import PropTypes from 'prop-types';

import './LoginBtn.scss';

export default class LoginBtn extends React.Component {

  render() {
    
    const {name, year, loading, handleLogin, handleLogout} = this.props;
    const loggedIn = Boolean(name);
    const btnName = loggedIn ? 'Log Out' : 'Log In';
    const handleLog = loggedIn ? handleLogout : () => handleLogin(year);
    return ( 
      (!loading) &&
      (<div 
        className="LoginBtn"
        onClick={handleLog} >
        {btnName}
      </div>)
    )
  }
}

LoginBtn.prototypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}
