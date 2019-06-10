import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import { getItems } from '../services/item';

class Main extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: getItems()});
    }

    render() {
        return <ItemList items={this.state.items} />;
    }
}

export default Main;