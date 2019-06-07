import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './random.scss';

import data from '../../data/cityID.json';

class Random extends Component {

  getRandomCities = () => {
    const randomCities = [];
    while (randomCities.length < 10) {
      const randomID = Math.floor((Math.random() * (data.id.length - 1))) + 1;
      const randomСityId = data.id[randomID]; 
      randomCities.push(randomСityId);
    }
    return randomCities;
  }

  // для получения списка без нажатия на ссылку (в случае обновления или перехода через адресную строку)
  componentDidMount () {
    if (window.location.pathname === `/cities`) {
      this.props.updateList(this.getRandomCities())
    };
  }

  render () {
    return (
      <Link className='random' to = '/cities' onClick = {() => {this.props.updateList(this.getRandomCities())}}>Get 10 random cities</Link>
    );
  }
}

export default Random;