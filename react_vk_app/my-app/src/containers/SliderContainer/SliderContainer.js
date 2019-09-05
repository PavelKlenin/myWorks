import React from 'react';
import {connect} from 'react-redux';

import Modal from '../../components/Modal';
import Slider from '../../components/Slider';

import {prevSlide, nextSlide, closeSlider} from '../../actions/SliderActions';

import './SliderContainer.scss';

class SliderContainer extends React.Component {
  render() {
    const {slider, prevSlide, nextSlide, closeSlider} = this.props;
    return (
      !slider.isOpen ?
        null :
        <> 
        <Modal
          closeSlider={closeSlider} />
        <Slider
          photoID={slider.index}
          photos={slider.photos}
          prevSlide={prevSlide}
          nextSlide={nextSlide} />
        </>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    slider: store.slider,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeSlider: () => dispatch(closeSlider()),
    prevSlide: (photos, i) => dispatch(prevSlide(photos, i)),
    nextSlide: (photos, i) => dispatch(nextSlide(photos, i)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);
