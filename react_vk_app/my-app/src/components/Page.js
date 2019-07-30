import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../components/Photo';
import Button from '../components/Button';

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
      }
    )

    const renderButtons = () => {
      const years =[2018, 2017, 2016, 2015, 2014];
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
      <div className="ib page">
        <p>
          {renderButtons()}
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