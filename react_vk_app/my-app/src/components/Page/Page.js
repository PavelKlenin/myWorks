import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../Photo';
import Button from '../Button';

import './Page.scss';

export default class Page extends React.Component {

  componentDidMount() {
    const {domain, year} = this.props;
    this.props.getPhotos(domain, year);
  }

  onBtnClick = e => {
    const {domain} = this.props;
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(domain, year);
  }

  onPhotoClick = (bigPhotos, i, e) => {
    this.props.openSlider(bigPhotos, i);
  }
  
  render() {
    const {year, photos, loading} = this.props;
    let bigPhotos =[];

    const newPhotos = photos.map((photo, i) => {
      // большие фото
      photo.sizes.forEach(size => {
        if (size.type === 'y') {
          bigPhotos = [...bigPhotos, size.url];
        };
      })
      return(
        <Photo
          url={photo.sizes[0].url}
          likes={photo.likes.count}
          onClick={e => this.onPhotoClick(bigPhotos, i, e)}
          key={photo.id}/>
      )
    })

    const renderButtons = () => {
      const years = [2018, 2017, 2016, 2015, 2014, 2013, 2012];
      return years.map((year, index) => {
        return (
          <Button
            onClick={this.onBtnClick}
            year={year}
            key={index}/>
        )
      })
    }

    return(
      <div className="Page">
        <div className="Page_buttons">
          {renderButtons()}
        </div>
        {
          loading ? 
          <p className="Page_text">Loading...</p> :
          <div>
            <h3 className="Page_title">
              {year} год [{newPhotos.length}]
            </h3>
            <div className="Page_photolist">
              {newPhotos}
            </div>
          </div>
        }
      </div>
    );
  }
}

Page.propTypes = {
  domain: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}