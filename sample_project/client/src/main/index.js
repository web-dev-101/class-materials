import React, { Component } from 'react';
import ItemList from '../items';
import { getItems } from '../services/itemModel';
import './style.css'

class Main extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: getItems()});
    }

    render() {
        return (
            <div className="main">
                <div className="item-area">
                    <ItemList items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default Main;