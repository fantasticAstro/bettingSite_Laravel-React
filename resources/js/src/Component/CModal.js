import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

function CModal(props) {
    
    let subtitle;
    
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    const model_style = {
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: props.width?props.width: '50%'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    };

    return (
        <div>
            <Modal
                isOpen={props.open_modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={model_style}
                contentLabel="Example Modal"
            >
                
                <div className='header' style={model_style.header}>
                    <h3 ref={(_subtitle) => (subtitle = _subtitle)}>{props.title}</h3>
                    <div>
                        <i 
                            className='fa fa-close' 
                            style={{cursor: 'pointer', marginBottom: '40px'}}
                            onClick = {props.close_modal}
                        >
                        </i>
                    </div>
                </div>
                {
                    props.children
                }

            </Modal>
        </div>
    )
}

export default CModal ;