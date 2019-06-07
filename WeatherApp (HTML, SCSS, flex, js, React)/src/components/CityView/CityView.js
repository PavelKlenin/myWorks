import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './cityView.scss';


// (window.location.pathname !== '/cities') ?
// <Link to = {`/cities/${city.id}`} > {props.name}, {props.sys.country}</Link>
class CityView extends Component {

  render () {
    const cityInfo = (props) => {
      return (
        <div className='cityInfo'>
          <p className='cityName'>{props.name}, {props.sys.country}</p>
          <p className='cityTemp'>Temperature: 
            <span>{props.main.temp} &deg;C</span>
          </p>
          <p className='cityWind'>Wind: 
            <span>{props.wind.speed} m/s</span>
          </p>
          <p className='cityWeather'>Weather: 
            <span>{props.weather[0].description}</span>
          </p>
        </div>
      );
    }
    const {city} = this.props;

    return (
      (window.location.pathname !== '/cities') ?
      (<div className='cityBlock'>
        {cityInfo(city)}
        <img 
          className='cityWeatherImg' 
          src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
          alt={city.weather[0].description}/>
      </div>) :
      (<Link to = {`/cities/${city.id}`} className='cityBlock'>
        {cityInfo(city)}
        <img 
          className='cityWeatherImg' 
          src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
          alt={city.weather[0].description}/>
      </Link>)
    );
  }
}

export default CityView;