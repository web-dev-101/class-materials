import React from 'react';
import Item from './Item/Item';

function ItemList(props) {
    console.log('What is this ', props.items);
    return (
        <div>
            { props.items.map(x => Item(x)) }
        </div>
    );
}

export default ItemList;