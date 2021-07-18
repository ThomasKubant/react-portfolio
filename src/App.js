import React, {useState} from 'react'
import Nav from "./components/Nav";
import Menu from './components/Menu';
import Content from './components/Content'
import Particles from 'react-particles-js'
import particlesConfig from './assets/particlesConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const menuOptions = [
    {
      name: "home",
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

  

  const [currentOption, setCurrentOption] = useState(menuOptions[0]);

  return (
    <div id="app">
      <Nav
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      ></Nav> 
      <Menu
      menuOptions={menuOptions}
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      ></Menu>
      <Content
      currentOption={currentOption}
      ></Content>
      <Particles params={particlesConfig}/>
    </div>
  );
}

export default App;
