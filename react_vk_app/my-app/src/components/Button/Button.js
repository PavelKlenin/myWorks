import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default class Button extends React.Component {
  render() {
    const {year, onClick} = this.props;
    return (
      <div className="Button" onClick={onClick}>{year}</div>
    )
  }
}

Button.propTypes = {
  year: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}