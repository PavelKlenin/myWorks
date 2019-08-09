import React from 'react';
import PropTypes from 'prop-types';

import './Photo.scss';

export default class Photo extends React.Component {
  render() {
    const {url, likes, onClick} = this.props;
    return (
      <div className="Photo" onClick={onClick}>
        <img className="Photo_img" src={url} alt=""/>
        <p className="Photo_like">{likes} &#10084;</p>
      </div>
    )
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
}