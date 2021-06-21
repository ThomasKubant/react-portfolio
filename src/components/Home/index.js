import React from 'react';
import image from '../../assets/images/splash.jpg'

function Home () {
    return(
        <div id='homePage'>
            <img id='splashImage' alt="Hey look, it's me!" src={image}></img>
            <h1>Hey there, I'm Thomas Kubant</h1>
            <h2>Full Stack Web Developer with a passion for creating outstanding websites.</h2>
        </div>
    )
}

export default Home