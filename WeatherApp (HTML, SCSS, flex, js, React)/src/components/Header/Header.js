import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

import Random from '../Random/Random';
import Search from '../Search/Search';

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <Link className='header-title' to = '/'>Weather API</Link>
        <Search />
        <Random updateList = {this.props.updateList}/>
      </header>
    );
  }
}

export default Header