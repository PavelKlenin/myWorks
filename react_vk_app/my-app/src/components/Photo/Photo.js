import React from 'react';
import PropTypes from 'prop-types';

import './Photo.scss';

export default class Photo extends React.Component {
  render() {
    const {url, likes, onClick} = this.props;
    console.log("TCL: Photo -> render -> url", url)
    const photoStyle = {
      background: `url(${url}) no-repeat 50% 30%/cover`,
    };

    return (
      <div
        className="Photo"
        style={photoStyle}
        onClick={onClick}>
        {/* <img className="Photo_img" src={url} alt=""/> */}
        <p className="Photo_like">{likes} &#10084;</p>
      </div>
    )
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
}