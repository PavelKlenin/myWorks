import React from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <PageContainer/>
        <UserContainer/>
      </div>
    );
  }
}

