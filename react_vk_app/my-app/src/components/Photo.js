import React from 'react';
import PropTypes from 'prop-types';

export default class Photo extends React.Component {
  render() {
    const {url, likes} = this.props;
    return (
      <div className="photo">
        <img className="photoImg" src={url} alt=""/>
        <p className="photoText">{likes} &#10084;</p>
      </div>
    )
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
}