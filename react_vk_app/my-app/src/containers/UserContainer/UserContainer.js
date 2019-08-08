import React from 'react';
import {connect} from 'react-redux';
import {handleLogin, handleLogout, getLoginStatus} from '../../actions/UserActions';
import User from '../../components/User';
import LoginBtn from '../../components/LoginBtn';

import './UserContainer.scss';

class UserContainer extends React.Component {
  render() {
    const {user, year, handleLogin, handleLogout, getLoginStatus} = this.props;

    return (
      <div className="UserContainer">
        <User
          name={user.name}
          year={year}
          loading={user.loading}
          error={user.error}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          getLoginStatus={getLoginStatus} />
        <LoginBtn
          name={user.name}
          year={year}
          loading={user.loading}
          handleLogin={handleLogin}
          handleLogout={handleLogout} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    year: store.page.year,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (year) => dispatch(handleLogin(year)),
    handleLogout: () => dispatch(handleLogout()),
    getLoginStatus: (year) => dispatch(getLoginStatus(year)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);