import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  renderTemplate = () => {
    const {name, loading, error, handleLogin} = this.props;

    if (error) {
      return (<p>Ошибка: {error}</p>);
    }
    if (loading) {
      return (<p>Loading...</p>)
    }
    if (name) {
      return (
          <p>Привет, {name}!</p>
      );
    } else {
      return (
        <button className="btn" onClick={handleLogin} >
          Войти
        </button>);
    }
  }

  render() {
    return (
      <div className="ib user">{this.renderTemplate()}</div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}