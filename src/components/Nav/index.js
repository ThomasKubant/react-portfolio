import { Button } from 'react-bootstrap'
import React from 'react'
import logo from '../../assets/images/logo.png'

function openMenu() {
  document.getElementById("menu").style.height = "100%";
  document.getElementById("overlay-particles").style.height = "100%";
}

function Nav(props) {
    const {setCurrentOption} = props;

    return (
        <header className="flex-row flex-spaceBetween flex-nowrap navBar">
            <img src={logo} alt="me :)" className="logo"></img>
            <div>
                <Button variant='outline-light' onClick={() => {setCurrentOption('contact')}}>Contact Me</Button>
                <Button variant='outline-light' id='openMenuBtn' onClick={openMenu}>Menu</Button>
            </div>
            
        </header>
    )
}

export default Nav