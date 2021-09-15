import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function Modal(props) {
    let { showModal, setShowModal} = props;
    let closeModal = () => {
        setShowModal(false)
    }
    
    document.addEventListener("click", (event) => {
        console.log(event)
        if(event.target.className != "project-modal" && (event.target.className != "project-item" || event.target.parentElement.className != "project-item")) {
            closeModal()
            console.log("closing modal")
        }
    })
    
        
    if(showModal) {
        {var project = JSON.parse(localStorage.getItem("foundProject"))}
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
        return(
            <div className="project-modal">
            <h1 className="closeModalBtn" onClick={closeModal}>X</h1>
            <h1>{project.name}</h1>
            <div className="project-modal-content">
                    <h2>{project.description}</h2>
                    <h2>Technologies used: {techStr}</h2>
                    <h2>Stack: {project.type}</h2>
                    <h2>Date started: {project.dateStarted}</h2>
            </div>
            
            <Button href={project.gitHubLink} target="_blank" variant="outline-primary">Github Repository</Button>
            <Button href={project.deployedLink} target="_blank" variant="outline-primary">Website</Button>
        </div>
        
    )
    }
    else return(null)

}
export default Modal