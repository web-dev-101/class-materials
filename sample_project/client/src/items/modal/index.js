import React from 'react';
import './style.css'

function Modal(props) {
    return (
        <div className='modal'>
            <div className='modal-box'>
                <div className='modal-exit' onClick={ props.handleClose }>X</div>
                <h3>Title: { props.title }</h3>
                <p>Description: { props.description }</p>
            </div>
        </div>
    );
}

export default Modal;