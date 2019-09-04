import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

export default class Modal extends React.Component {
  
  closeSlider = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeSlider();
    }
  }
 
  render() {
    return (
      <div className="Modal" onClick={(e) => {this.closeSlider(e)}} />
    );
  }
}

Modal.propTypes = {
  closeSlider: PropTypes.func.isRequired,
}