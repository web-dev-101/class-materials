import React from 'react';
import './style.css'

function Item(props) {
    return (
        <div key={ props.id } className="item">
            <h2>{ props.title }</h2>
            <p>{ props.description }</p>
        </div>
    )
}

export default Item;