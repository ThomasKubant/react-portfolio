import React from 'react';

function Project(props) {
    let foundProject;
    const { projectList } = props
    let projectClick = (e) => {
        let target = e.target;
        let foundID
        if (target.localName === 'img') {
            foundID =  'project-' + target.attributes.id.nodeValue;
        }
        else if (target.className === 'img-wrap') {
            foundID = target.parentElement.attributes.id.nodeValue;
        }
        else if (target.localName === 'div') {
            foundID = target.attributes.id.nodeValue;
        }
        else {
            foundID = target.parentElement.attributes.id.nodeValue;
        }
        
        for(let i=0;i<projectList.length;i++) {
            if(projectList[i].projectID == foundID) foundProject = projectList[i]
        }
    }
    return (

        projectList.map((project) => (
            <div className="project-item" key={project.name} id={project.projectID} onClick={projectClick}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="img-wrap">
                    <img id={project.imageID} src={project.image}></img>
                </div>
                <div className="modal">
                    <h1>{foundProject.name}</h1>
                </div>
            </div>
        ))
    )


}

export default Project