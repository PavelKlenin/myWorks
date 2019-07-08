import React from 'react';
import {Link} from 'react-router';

import style from '../style/UserInfo.css'

class UserInfo extends React.Component {
    render () {
        return (
            <div className={style.user}>
                {
                    (window.location.pathname != `/users/${this.props.id}`) ?
                    (<h2>
                        <Link to={`/users/${this.props.id}`}>{this.props.username}</Link>
                    </h2>) :
                    (<h2>{this.props.username}</h2>)
                }
                <hr/>
                <p>name: {this.props.name}</p>
                <p>email: {this.props.email}</p>
                <p>phone: {this.props.phone}</p>
                <p>website: {this.props.website}</p>
            </div>
        );
    }
}

export default UserInfo;