import React from 'react'
import Nav from "./components/Nav";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Menu from './components/Menu';
import Particles from 'react-particles-js'
import particlesConfig from './assets/particlesConfig';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const menuOptions = [
    {
      name: "",
      text: "Home"
    },
    {
      name: "about",
      text: "About Me"
    },
    {
      name: "projects",
      text: "Projects"
    },
    {
      name: "contact",
      text: "Contact Me"
    }
  ]

  


  return (
    <div id="app">
      <Router>
        <Nav/>
        <Menu menuOptions={menuOptions}/>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
        <Particles params={particlesConfig}/>
      </Router>
      
    </div>
  );
}

export default App;
