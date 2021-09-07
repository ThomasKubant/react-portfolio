import React, {useEffect} from "react";
import { Col, Row } from "react-bootstrap";

function Modal(props) {
    let { showModal, setShowModal} = props;
    let closeModal = () => {
        setShowModal(false)
    }
        
    if(showModal) {
        {var project = JSON.parse(localStorage.getItem("foundProject"))}
        return(
        <div className="project-modal">
            <h1 onClick={closeModal}>Close Modal</h1>
            <h1>{project.name}</h1>
        </div>
    )
    }
    else return(null)
    
}
export default Modal