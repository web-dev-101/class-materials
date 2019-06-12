import React from 'react';
import Item from './item';
import './style.css';

function ItemList(props) {
    console.log('What is this ', props.items);
    return (
        <div className="items">
            { props.items.map(x => Item(x)) }
            <div>
                <button>Add</button>
            </div>
        </div>
    );
}

export default ItemList;