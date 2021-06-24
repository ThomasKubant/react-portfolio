import { Button, Col } from 'react-bootstrap'
import React from 'react'
import logo from '../../assets/images/logo.png'

function openMenu() {
  document.getElementById("menu").style.height = "100%";
}

function Nav() {
    return (
        <header className="flex-row flex-spaceBetween navBar">
            <Col md='10'><img src={logo} alt="me :)"></img></Col>
            <Button variant='outline-light'>Contact Me</Button>
            <Button variant='outline-light' id='openMenuBtn' onClick={openMenu}>Menu</Button>
        </header>
    )
}

export default Nav