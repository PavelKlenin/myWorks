import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './Slider.scss';

export default class Slider extends React.Component {
  
  moveRight = (photos, photoID) => {
    this.props.nextSlide(photos, photoID);
  }

  moveLeft = (photos, photoID) => {
    this.props.prevSlide(photos, photoID);
  }
  
  render() {
    const {photoID, photos} = this.props;

    return (
      <div className="Slider">
        <img
          className="Slider_item"
          src={photos[photoID]}
          alt="#" />
        <div className="Slider_nav-arrows">
          <div className="Slider_arrow" onClick={() => {this.moveLeft(photos, photoID)}}>
            <FontAwesomeIcon className="Slider_arrow-icon" icon={faChevronLeft} />
          </div>
          <div className="Slider_arrow" onClick={() => {this.moveRight(photos, photoID)}}>
            <FontAwesomeIcon className="Slider_arrow-icon" icon={faChevronRight} />
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  photoID: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
}