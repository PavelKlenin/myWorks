import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../components/Photo';

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  }
  
  render() {
    const {year, photos, loading} = this.props;
    const newPhotos = photos.map(photo => {
      return(
        <Photo url={photo.sizes[0].url} likes={photo.likes.count} key={photo.id}/>
      )
    })
    return(
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>2018</button>
          <button className="btn" onClick={this.onBtnClick}>2017</button>
          <button className="btn" onClick={this.onBtnClick}>2016</button>
          <button className="btn" onClick={this.onBtnClick}>2015</button>
          <button className="btn" onClick={this.onBtnClick}>2014</button>
        </p>
        {
          loading ? 
          <p>Loading...</p> :
          <div>
            <h3>{year} год [{newPhotos.length}]</h3>
            <div className="photoList">
              {newPhotos}
            </div>
          </div>
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
  error: PropTypes.string,
}