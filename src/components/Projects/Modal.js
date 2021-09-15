import React, {useEffect} from "react";
import { Col, Row } from "react-bootstrap";

function Modal(props) {
    let { showModal, setShowModal} = props;
    let closeModal = () => {
        setShowModal(false)
    }
        
    if(showModal) {
        {var project = JSON.parse(localStorage.getItem("foundProject"))}
        {
            var techStr = "";
            for (let i = 0; i < project.tech.length; i++) {
                if (i == project.tech.length - 1) {
                    techStr += "and " + project.tech[i]
                }
                else {
                    techStr += project.tech[i] + ", "
                }
            }
        }
        return(
        <div className="project-modal">
            <h1 className="closeModalBtn" onClick={closeModal}>X</h1>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <h2>Technologies used: {techStr}</h2>
            
            
        </div>
    )
    }
    else return(null)
    
}
export default Modal