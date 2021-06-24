import React, {useState} from 'react'
import Nav from "./components/Nav";
import Menu from './components/Menu';
import Content from './components/Content'
import Particles from 'react-particles-js'
import particlesConfig from './assets/particlesConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function openMenu() {
  document.getElementById("menu").style.height = "100%";
}


function closeMenu() {
  document.getElementById("menu").style.height = "0%";
} 

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
      name: "social",
      text: "Social Media"
    }
  ]

  const [currentOption, setCurrentOption] = useState(menuOptions[0]);

  return (
    <div>
      <Nav></Nav>
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

if(document.getElementById('openMenuBtn'))document.getElementById('openMenuBtn').addEventListener('click', openMenu());
if(document.getElementById('closeMenuBtn'))document.getElementById('closeMenuBtn').addEventListener('click', closeMenu())

export default App;
