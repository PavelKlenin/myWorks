import React, {Component} from 'react';
import axios from 'axios';
import CityView from '../CityView/CityView';

import './cityList.scss';

class RandomCities extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cities: null,
    }
    this.KEY = '9fd52b09f66035c9bb5a0eb5041e5991';
  }

  getRandomList = () => {
    axios(`http://api.openweathermap.org/data/2.5/group?id=${this.props.randomCities}&units=metric&APPID=${this.KEY}`)
      .then(response => this.setState({cities: response.data.list}))
      .catch(e => console.log(e));
  }

  // для обновления страницы
  componentDidUpdate (prevProps) {
    if (this.props.randomCities !== prevProps.randomCities) {
      this.getRandomList();
    }
  }

  // для первого перехода на страницу
  componentDidMount () {
    this.getRandomList();
  }

  render () {
    if (this.state.cities) {
      const fewCities = this.state.cities.map((city, index) => {
        return (
          <CityView
            className='cityListItem'
            key = {index}
            city = {city} />
        );
      });
      return (
        <div className='cityList'>
          {fewCities}
        </div>
      );
    }
    else return (<div className='loading'>Loading...</div>);
  }
}

export default RandomCities;