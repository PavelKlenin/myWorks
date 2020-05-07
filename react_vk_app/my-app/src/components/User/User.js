import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export default class User extends React.Component {
  componentDidMount() {
    const {getLoginStatus, year} = this.props;

    getLoginStatus(year);
  }
  
  renderTemplate = () => {
    const {name, loading, error} = this.props;
    
    if (error) {
      console.log("TCL: User -> renderTemplate -> error", error)
    }
    if (loading) {
      return (<p className="User_text">Loading...</p>)
    }
    if (name) {
      return (<p className="User_text">{name}</p>);
    }
  }
    
  render() {
    return (
      <div className="User">
        {this.renderTemplate()}
      </div>
      
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  getLoginStatus: PropTypes.func.isRequired,
}