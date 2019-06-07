import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './style/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cities from './components/СityList/CityList';
import City from './components/City/City';

// import List from './components/List';

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
      randomList: [], 
    }
  }
  
  /*через updateList получаем данные id из Random (через Header) для передачи в Cities */
  updateList = (randomList) => {
    this.setState({
      randomList, 
    });
  }

  render () {
    return (
      <div className='container'>
        <Header updateList = {this.updateList} /> 
        <div className='content'>
          <Switch>
            <Route 
              exact path = '/cities' 
              render = {() => <Cities randomCities = {this.state.randomList}/>} />
            <Route path = '/cities/:number' component = {City} />
            {/* <Route path = '/list' component = {List} /> */}
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render (
  <BrowserRouter>
    <Index/>
  </BrowserRouter>,
  document.querySelector('#root')
);