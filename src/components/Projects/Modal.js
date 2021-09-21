import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function Modal(props) {
    let { showModal, setShowModal } = props;
    let closeModal = () => {
        setShowModal(false)
    }

    document.addEventListener("click", (event) => {
        console.log(event)
        // if i dont click on project modal OR if i dont click on project-item (OR anything in project-item) close modal
        if (event.path[1].className !== "project-modal" && event.path[2].className !== "project-modal" && event.target.className !== "project-modal" && (event.target.className !== "project-item" && event.target.nodeName !== "IMG" && event.target.parentElement.className !== "project-item") ) {
            closeModal()
        }
    })


    if (showModal) {
        { var project = JSON.parse(localStorage.getItem("foundProject")) }
        {
            var techStr = "";
            for (let i = 0; i < project.tech.length; i++) {
                if (i === project.tech.length - 1) {
                    techStr += "and " + project.tech[i]
                }
                else {
                    techStr += project.tech[i] + ", "
                }
            }
        }
        return (
            <div className="project-modal">
                <h1 className="closeModalBtn" onClick={closeModal}>X</h1>
                <h1>{project.name}</h1>
                <div className="project-modal-content">
                    <h2>{project.description}</h2>
                    <h2>Technologies used: {techStr}</h2>
                    <h2>Stack: {project.type}</h2>
                    <h2>Date started: {project.dateStarted}</h2>
                </div>
                <div className="modal-buttons">
                    <Button href={project.gitHubLink} target="_blank" variant="outline-primary">Github Repository</Button>
                    <Button href={project.deployedLink} target="_blank" variant="outline-primary">Website</Button>
                </div>
                
            </div>

        )
    }
    else return (null)

}
export default Modal