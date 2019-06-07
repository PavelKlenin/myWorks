import React, {Component} from 'react';

import './search.scss';

import cityData from '../../data/newList.json';
import {withRouter} from 'react-router-dom';

class Search extends Component {
  constructor (props) {
    super(props);

    this.foundCity = React.createRef();
    this.search = React.createRef();
    this.state = {
      cityMatches: [],
      cityID: null,
      listID: 0,
    }
  }

  searchCity = (e) => {
    const cityInput = e.target.value;
    let cityMatches = []; // обнуляем список
    if (cityInput.length > 3) {
      const cityName = cityInput[0].toUpperCase() + cityInput.substr(1);
      cityData.forEach((city) => {
        if (cityName === city.name.slice(0, cityInput.length)) {
          cityMatches.push(city); // добавляем в список
        }
      })
    }
    else cityMatches = []; // обнуляем список, если меньше 3х символов
    this.setState({cityMatches, cityID: null, listID: -1});
  }

  chooseCity = (e) => {
    this.search.current.value = e.target.innerHTML;
    this.setState({cityMatches: [], cityID: e.target.id, listID: -1});
  }

  startSeacrhing = (e) => {
    e.preventDefault();
    if (this.state.cityID) {
      this.props.history.push(`/cities/${this.state.cityID}`); // переход по адресу без перезагрузки
      this.search.current.value = '';                            // обнуление поля ввода
      this.setState({cityMatches: [], cityID: null, listID: -1}) // обнуление state
    }
  }

  listNav = (e) => {
    const list = document.querySelectorAll('.foundCity');
    const searchList = document.querySelector('.searchList')
    const listHeight = searchList.scrollTop + searchList.clientHeight; // высота выпадающего поиска с учетом прокрутки
    // console.log(listHeight);
    let i = this.state.listID;
    switch(e.keyCode) {
      case 38:                                   // стрелка вверх
        if (i > 0) {                             // чтобы не поднимался выше 0 элемента, чтобы не работал при первом нажатии
          list[i].classList.remove('focused');   // убирает у пред элемента
          list[i-1].classList.add('focused');    // добавляет текущему элементу
          this.setState((prevState) => {         // при след нажатии i = i-1
            return {
            cityMatches: prevState.cityMatches,
            cityID: prevState.cityID,
            listID: prevState.listID - 1,
          }});  
          // если разница между отступом элемента и общей высотой блока больше видимой части блока
          if ((listHeight - list[i-1].offsetTop) >= searchList.clientHeight) { 
            list[i-1].scrollIntoView(true);              
          }
        }
        break;
      case 40:                                   // стрелка вниз
        if (i < (list.length-1)) {               // чтобы i+1 не вышел за пределы списка
          if (list[i]) {                         // если есть текущий (т.е не при первом нажатии, т.к. i=-1)
            list[i].classList.remove('focused'); // убираем у текущего
          }              
          list[i+1].classList.add('focused');    // добавляем следующему
          this.setState((prevState) => {         // при след нажатии i = i+1
            return {
            cityMatches: prevState.cityMatches,
            cityID: prevState.cityID,
            listID: prevState.listID + 1,
          }});   
          if (list[i+1].offsetTop >= listHeight) {
            list[i+1].scrollIntoView(false)                
          }
        }
        break;
      case 13:
        if (document.querySelector('.focused') && this.state.cityID === null) {  // если город выбран и this.state.cityID: null
          this.search.current.value = list[i].innerHTML;
          this.setState({cityMatches: [], cityID: list[i].id, listID: 0});
        }
        else this.startSeacrhing(e);       // если город выбран, выполняется поиск
        break;
      default:
        break;
    }
  }

  render () {
    const cityMatchesList = this.state.cityMatches.map((city, index) => {
      return (
        <li 
          className='foundCity' 
          key={index} 
          onClick={this.chooseCity} 
          id={city.id}  
          ref={this.foundCity} 
        >
          {city.name} 
        </li>);
    });
  
    return (
      <div className='searchBlock'>
        <div className='searchForm'>
          <input 
            className='inputSearch' 
            type="search" 
            onChange={this.searchCity} 
            ref={this.search} 
            onKeyDown={this.listNav}
          />
          <button className='btnSearch' onClick={this.startSeacrhing} >Search</button>
          <ul className='searchList' >{cityMatchesList}</ul>  
        </div>
      </div>
    );
  }
}

export default withRouter(Search);

// Для другого типа поиска
// axios(`http://api.openweathermap.org/data/2.5/find?q=Petersburg&type=like&APPID=${this.KEY}`)
//     .then(response => console.log(response.data)
//         // this.setState({cities: response.data.list,})
//         )
//     .catch(e => console.log(e));