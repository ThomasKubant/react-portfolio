import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

function closeMenu() {
  document.getElementById("menu").style.height = "0%";
} 

function Menu () {
    // const [currentPage, setCurrentPage] = useState('home')
    return(
        <div className='overlay' id='menu'>
            <Button variant='danger' id='closeMenuBtn' onClick={closeMenu}>Close</Button>
            <div className='overlay-content'>
                <h1>Home</h1>
                <h1>About Me</h1>
                <h1>Projects</h1>
                <h1>Social Media</h1>
            </div>
        </div>
    )
}

export default Menu;