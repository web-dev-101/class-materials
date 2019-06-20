import React, { Component } from 'react';
import ItemList from '../items';
import './style.css'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="item-area">
                    <ItemList />
                </div>
            </div>
        );
    }
}

export default Main;