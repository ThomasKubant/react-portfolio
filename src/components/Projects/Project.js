import React from 'react';

function Project(props) {
    const { projectList } = props
    let projectClick = (e) => {
        let target = e.target;
        let foundID
        if (target.localName == 'img') {
            foundID =  'project-' + target.attributes.id.nodeValue;
        }
        else {
            foundID = target.parentElement.attributes.id.nodeValue;
        }
        
        console.log(foundID)
    }
    return (

        projectList.map((project) => (
            <div className="project-item" key={project.name} id={project.projectID} onClick={projectClick}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="img-wrap">
                    <img id={project.imageID} src={project.image}></img>
                </div>
            </div>
        ))
    )


}

export default Project