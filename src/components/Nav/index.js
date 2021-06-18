import { Button, Col } from 'react-bootstrap'
import React from 'react'

function openMenu() {
  document.getElementById("menu").style.height = "100%";
}

function Nav() {
    return (
        <header className="flex-row flex-spaceBetween navBar">
            <Col md='10'><h1><a href='/'>LOGO</a></h1></Col>
            <Button variant='outline-light'>Contact Me</Button>
            <Button variant='light' id='openMenuBtn' onClick={openMenu}>Menu</Button>
        </header>
    )
}

export default Nav