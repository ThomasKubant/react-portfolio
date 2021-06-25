import React from 'react';
import {Button} from 'react-bootstrap'

function closeMenu() {
    document.getElementById("menu").style.height = "0%";
}

function Menu (props) {
    const {menuOptions, setCurrentOption} = props
    return(  
        <div id="menu" className='overlay'>    
            <ul className='overlay-content'>
                {menuOptions.map((option) => (
                    <li className="menu-item" key={option.name}>
                        <a
                        className="menu-link"
                        href={`#${option.name}`}
                        onClick={() => {
                            setCurrentOption(option.name);
                            closeMenu();
                        }}
                        ><h1>{option.text}</h1></a>
                    </li>
                ))}
            </ul>
            <Button Button variant='danger' id='closeBtn' className='closeBtn' onClick={closeMenu}>Close</Button>
        </div>
    )
}
export default Menu;