import React from 'react';

class Menu extends React.Component {
    render () {
        return (
            <ul>
                {this.props.children} 
            </ul>
        )
    }
}

export default Menu;