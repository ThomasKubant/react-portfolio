import React from 'react';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Social from '../Social'
function Content(props) {
    let {currentOption} = props;

    switch(currentOption) {
        case 'home':
            return <Home />
        case 'about':
            return <About />
        case 'projects':
            return <Projects />
        case 'social':
            return <Social />
        default:
            return <Home />
    }
}

export default Content