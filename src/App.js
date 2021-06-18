import React from 'react'
import Nav from "./components/Nav";
import Menu from './components/Menu'
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
  return (
    <div>
      <Nav></Nav>
      <Menu></Menu>
      <Particles params={particlesConfig}/>
    </div>
  );
}

if(document.getElementById('openMenuBtn'))document.getElementById('openMenuBtn').addEventListener('click', openMenu());
if(document.getElementById('closeMenuBtn'))document.getElementById('closeMenuBtn').addEventListener('click', closeMenu())

export default App;
