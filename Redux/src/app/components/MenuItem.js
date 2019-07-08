import React from 'react';
import {Link} from 'react-router';

import style from '../style/MenuItem.css';

class MenuItem extends React.Component {

    render () {
        return (
            <Link 
                className={this.props.active ? `${style.item} ${style.active}` : `${style.item}`} 
                to={this.props.href}>
                {this.props.children}
            </Link>
        )
    }
}

export default MenuItem;
