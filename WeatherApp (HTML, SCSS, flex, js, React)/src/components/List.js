import React, {Component} from 'react';
import dataJson from '../data/city.list.json';

// Получение данных для поисковой строки и для случайного списка городов
export default class List extends Component {
  render () {
    const citiesID = dataJson.map((cityData, index) => {
      return (
        <span key = {index}>&#123;"id":{cityData.id},"name":"{cityData.name}, {cityData.country}"&#125;,</span>
      );
    });

    return (citiesID);
  }
}