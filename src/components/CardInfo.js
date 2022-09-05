import { Modal } from 'react-bootstrap'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function CardInfo (props) {
    const [show, setShow] = useState(false)

    const { title, icon, items } = props

    return <>
        <article
            className="d-flex flex-column mx-auto bg-card px-3 py-4 card-info focus-element cursor-pointer"
            style={{ position: 'relative' }}
            onClick={e => setShow(true)}
        >
            <img className="absolute-top rounded-circle icon-card" width={75} src={icon + '.png'} alt={icon} />

            <div className="text-center text-bold h5 my-4">
                { title }
            </div>

            {items.map(item => <div className="d-flex align-items-center my-4">
                <FontAwesomeIcon className="text-celeste mx-2" icon={faCheck} /> {item}
            </div>)}
        </article>

        <Modal show={show} onHide={e => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column'>
                    {items.map(item => <div className="d-flex align-items-center my-4">
                        <FontAwesomeIcon className="text-celeste mx-2" icon={faCheck} /> {item}
                    </div>)}
                </div>
            </Modal.Body>
        </Modal>
    </>
}

export default CardInfo