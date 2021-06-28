import React from 'react';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact'
function Content(props) {
    let {currentOption} = props;

    switch(currentOption) {
        case 'home':
            return <Home />
        case 'about':
            return <About />
        case 'projects':
            return <Projects />
        case 'contact':
            return <Contact />
        default:
            return <Home />
    }
}

export default Content