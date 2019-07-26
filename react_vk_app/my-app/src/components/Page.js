import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  }

  render() {
    const {year, photos, loading} = this.props;
    return(
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>2018</button>
          <button className="btn" onClick={this.onBtnClick}>2017</button>
          <button className="btn" onClick={this.onBtnClick}>2016</button>
          <button className="btn" onClick={this.onBtnClick}>2015</button>
          <button className="btn" onClick={this.onBtnClick}>2014</button>
        </p>
        <h3>{year} год</h3>
        {
          loading ? 
            <p>Loading...</p> :
            <p>У тебя {photos.length} фото</p>
        }
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}