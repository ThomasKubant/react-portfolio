import { Button, Col } from 'react-bootstrap'
import React from 'react'
import logo from '../../assets/images/logo.png'

function openMenu() {
  document.querySelector("body:not(#tsparticles)").style.display = 'none';
  document.getElementById("menu").style.height = "100%";
}

function Nav() {
    return (
        <header className="flex-row flex-spaceBetween flex-nowrap navBar">
            <img src={logo} alt="me :)" className="logo"></img>
            <div>
                <Button variant='outline-light'>Contact Me</Button>
                <Button variant='outline-light' id='openMenuBtn' onClick={openMenu}>Menu</Button>
            </div>
            
        </header>
    )
}

export default Nav