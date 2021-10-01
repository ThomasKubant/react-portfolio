import React, {useState} from "react";
import Project from "./Project";
import { Col, Row } from "react-bootstrap";
import snak from "../../assets/images/snak.jpg";
import socialbackend from "../../assets/images/social-backend.png";
import budget from "../../assets/images/budget.png";
import techBlog from "../../assets/images/techBlog.png";
import bookSearch from "../../assets/images/bookSearch.jpg"
import Notes from "../../assets/images/Notes.png"
import Modal from './Modal'

const projectList = [
    {
        name: "Snakchat",
        description: "Social media for snack lovers to share their thoughts about unique snacks.",
        longDescription: "Social media for snack lovers to share their thoughts about unique snacks. The goal of the website is to create a friendly community for snack lovers to discuss unique treats they find.  Users can sign up, view posts, create posts, comment on posts, like posts, edit their own posts, and delete their own posts.Discussions include thoughts on snacks, where to find snacks, and much more. Some goals for future developments are visual improvements, implementing a thread system, and better filtering options for the main page's feed. My role in this project was coming up with the concept and branding, front end development, and debugging. Other contributors include Maribel Ellison and Kyle Ryan.",
        tech: ["Node.js", "SQL", "Express"],
        type: "Full Stack",
        image: snak,
        dateStarted: "05/10/2021",
        gitHubLink: "https://github.com/rookoyole/snakchat",
        deployedLink: "https://lit-anchorage-48237.herokuapp.com/",
        projectID: 'project-1',
        imageID: '1'
    },
    {
        name: "Book Search Engine",
        description: "Book search engine using Google's book API. Make an account, search for your favorite books, and save them to your favorites list.",
        longDescription: "Book search engine using Google’s book API. After signing up, users can search for any book or series, get a list of every match, view images and detailed descriptions, and add books to their favorites list. After adding a book to the favorites list, it is possible to view and edit your favorite books with ease. Some future developments are implementing a friend system so users can add their peers and view each other's lists, and adding the ability to rate and comment on books. I am the sole author of this project.",
        tech: ["Node.js", "Express", "MongoDB", "React", "MERN Stack"],
        type: "Full Stack",
        image: bookSearch,
        dateStarted: "06/29/2021",
        gitHubLink: "https://github.com/ThomasKubant/book-search-engine",
        deployedLink: "https://thomaskubant-book-search.herokuapp.com/",
        projectID: 'project-2',
        imageID: '2'
    },
    {
        name: "Social Media Backend",
        description: "Backend server and database for a social media website",
        tech: ['Node.js', 'MongoDB', 'Express'],
        type: "Back End",
        image: socialbackend,
        dateStarted: "06/04/2021",
        gitHubLink: "https://github.com/ThomasKubant/Social-Network-Backend",
        deployedLink: "https://github.com/ThomasKubant/Social-Network-Backend",
        projectID: 'project-3',
        imageID: '3'
    },
    {
        name: "Budget Tracker",
        description: "Budget tracking app that features offline functionality and a graph displaying budget history",
        tech: ['Node.js', 'MongoDB', 'Express', 'Progressive Web App'],
        type: "Full Stack",
        image: budget,
        dateStarted: "06/09/2021",
        gitHubLink: "https://github.com/ThomasKubant/budget-tracker",
        deployedLink: "https://cryptic-refuge-11081.herokuapp.com/",
        projectID: 'project-4',
        imageID: '4'
    },
    {
        name: "Tech News Blog",
        description: "Social Media website that allows users to discuss the latest and greatest tech news",
        tech: ['Node.js', 'SQL', 'Express'],
        type: "Full Stack",
        image: techBlog,
        dateStarted: "06/09/2021",
        gitHubLink: "https://github.com/ThomasKubant/Blog",
        deployedLink: "https://mighty-cliffs-21833.herokuapp.com/",
        projectID: 'project-5',
        imageID: '5'
    },
    {
        name: "Note Taker",
        description: "Simple full stack app for taking and saving various notes.",
        tech: ['Node.js', 'Express'],
        type: "Full Stack",
        image: Notes,
        dateStarted: "04/16/2021",
        gitHubLink: "https://github.com/ThomasKubant/Note-Taker",
        deployedLink: "https://thomaskubant.github.io/Note-Taker/",
        projectID: 'project-6',
        imageID: '6'
    }
]

function Projects() {
    let [showModal, setShowModal] = useState(false)
    return(
        <Row className={`project-content`}>
            {/* <Col md={2} className="sidebar">
                <h2>Filter Projects</h2>
                <div className="technology-filter">
                    <h3>Technologies:</h3>
                    <ToggleButtonGroup type="checkbox" id="tech-btn-group" style={{ flexWrap: "wrap"  }}>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="1">Third Party APIs</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="2">Node.js</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="4">SQL</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="3">Express</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="5">MongoDB</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="6">Progressive Web Application</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="7">React</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value="8">MERN</ToggleButton>
                    </ToggleButtonGroup>
                    <h3>Type:</h3>
                    <ToggleButtonGroup type="checkbox" id="type-btn-group" style={{ flexWrap: "wrap" }}>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value='1'>Front End</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value='2'>Back End</ToggleButton>
                        <ToggleButton id="btn-group-item" size="sm" variant='secondary' value='3'>Full Stack</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                
            </Col> */}
            <Col className="projects">
                <Row><h1 className="projects-header">Projects</h1></Row>
                <Modal showModal={showModal} setShowModal={setShowModal} projectList={projectList} />
                <Row className="projects-group">
                    <Project projectList={projectList} setShowModal={setShowModal}></Project>
                </Row>
            </Col>

            
        </Row>
  );
}

export default Projects;
