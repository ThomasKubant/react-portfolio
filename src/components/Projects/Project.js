import React from 'react';


function Project(props) {
    const { projectList } = props

    return (

        projectList.map((project) => (
            <div className="project-item" key={project.name}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="img-wrap">
                    <img src={project.image}></img>
                </div>
                <div>
                    <a href={project.deployedLink}>View Website</a>
                    <a href={project.gitHubLink}>View Github Repository</a>
                </div>

            </div>
        ))
    )


}

export default Project