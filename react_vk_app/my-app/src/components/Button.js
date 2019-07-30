import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const {year, onClick} = this.props;
    return (
      <button className="btn" onClick={onClick}>{year}</button>
    )
  }
}

Button.propTypes = {
  year: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}