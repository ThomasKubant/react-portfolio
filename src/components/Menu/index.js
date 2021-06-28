import React from 'react';
import Particles from 'react-particles-js'
import particlesConfig from '../../assets/particlesConfig';

function closeMenu() {
    document.getElementById("menu").style.height = "0%";
    document.getElementById("overlay-particles").style.height = "0%";
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
            <Particles id="overlay-particles" params={particlesConfig}/>
            <h1 id="closeBtn" className="closeBtn" onClick={closeMenu}>X</h1>
        </div>
    )
}
export default Menu;