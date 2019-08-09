import React from 'react';
import {connect} from 'react-redux';

import {closeSlider} from '../../actions/PageActions';

import './Slider.scss';

class Slider extends React.Component {
  render() {
    console.log("TCL: Slider -> render -> this.props", this.props);
    const {slider} = this.props;
    return (
      !slider.isOpen ?
      null :
      <div>
        {this.props.slider.index}
      </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
