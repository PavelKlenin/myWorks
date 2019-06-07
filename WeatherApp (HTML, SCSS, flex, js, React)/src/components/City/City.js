import React, {Component} from 'react';
import axios from 'axios';
import CityView from '../CityView/CityView';

import './city.scss';

class City extends Component {
  constructor (props) {
    super(props);

    this.KEY = '9fd52b09f66035c9bb5a0eb5041e5991';

    this.state = {
      city: null,
    }
  }

  getCityData = () => {
    const cityID = this.props.match.params.number;
    axios(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&APPID=${this.KEY}`)
      .then(response => this.setState({city: response.data,}))
      .catch(e => console.log(e.data))
  }

  // для обновления страницы
  componentDidUpdate(prevProps) {
    if (this.props.match.params.number !== prevProps.match.params.number) {
      this.getCityData();
    }
  }

  // для первого перехода на страницу
  componentDidMount () {
    this.getCityData();
  }

  render () {
    return (
      (this.state.city) ?
      (<div className='oneCity'>
        <CityView city = {this.state.city}/>
      </div>):
      (<div className='loading'>Loading...</div>)
    )
  }
}

export default City;