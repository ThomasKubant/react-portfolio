import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";

function Modal(props) {
    let { showModal, setShowModal, foundProject } = props;
    let modalEl = document.querySelector('.project-modal');
    let closeModal = () => {
        setShowModal(false)
    }
    if(showModal) {
        modalEl.style.display = 'fixed'
    }
    if(!showModal) {
        modalEl.style.display = 'none'
    }
    return(
        <div className="project-modal">
            <h1 onClick={closeModal}>Close Modal</h1>
        </div>
    )
}
export default Modal