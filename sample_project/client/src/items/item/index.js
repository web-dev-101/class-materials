import React from 'react';
import './style.css'

function Item(props) {
    return (
        <div className="item">
            <h2>{ props.title }</h2>
            <p>{ props.description }</p>
            <button onClick={() => props.handleView(props.id)}>View</button>
        </div>
    )
}

export default Item;