import React, { Component } from 'react';
import Item from './item';
import Modal from './modal';
import { postItem, getItems } from '../services/itemModel';
import './style.css';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            items: [],
            modalContent: null,
            modalOpen: false,
            title: ''
        }

        this.getTitle = this.getTitle.bind(this);
    }

    componentDidMount() {
        let items = getItems();
        this.setState({items: [...items]});
    }

    addItem = () => {
        let newItem = {
            title: this.state.title,
            description: this.state.description
        }
        newItem.id = postItem(newItem);

        this.setState((prevState) => { return {items: [...prevState.items, newItem]} });
    }

    // Virtually no difference between this 
    getTitle(e) {
        this.setState({ title: e.target.value });
    }

    // And this
    getDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    openModal = (id) => {
        if (!this.state.modalOpen) {
            let content = this.state.items.find(x => x.id === id);
            this.setState({ modalOpen: true, modalContent: Object.assign({}, content) });
        }
    }

    closeModal = () => {
        this.setState({ modalOpen: false, modalContent: {} })
    }

    renderItems = () => {
        return this.state.items.map(x => <Item {...x} handleView={ this.openModal } key={ x.id } />);
    }

    render () {
        return (
            <div className='items'>
                { this.renderItems() }

                <div className='form-area'>
                    <input onChange={ this.getTitle } placeholder='Title' />
                    <textarea onChange={ this.getDescription } placeholder='Description' />
                    <button onClick={ this.addItem }> Add </button>
                </div>

                { this.state.modalOpen && <Modal {...this.state.modalContent} handleClose={ this.closeModal } /> }
            </div>
        )
    };
}

export default ItemList;