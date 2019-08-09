import React from 'react';
import UserContainer from '../../containers/UserContainer';
import PageContainer from '../../containers/PageContainer';
import Slider from '../Slider';
import Footer from '../Footer';
import {Route} from 'react-router';
import './App.scss';

export default class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Slider />
        <div className="App_content">
          <header className="App_header">
            <UserContainer />
          </header>
          <Route path="/:domain/:year" component={PageContainer} />
        </div>
        <footer className="App_footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

