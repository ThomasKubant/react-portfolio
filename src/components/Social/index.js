import React from 'react';
import instagramLogo from '../../assets/images/insta-logo.png'
import gitHub from '../../assets/images/github.png'
import youtube from '../../assets/images/youtube.png'
import stack from '../../assets/images/stack.png'
import email from '../../assets/images/email.png'

function Social() {
    const socialList = [
        {
          name: "email",
          image: email,
          link: "mailto: thomaskubant@gmail.com" 
        },
        {
          name: "instagram",
          image: instagramLogo,
          link: "https://www.instagram.com/thomaskubant/"
        },
        {
          name: 'github',
          link: "https://github.com/ThomasKubant",
          image: gitHub
        },
        {
          name: 'youtube',
          link: 'https://www.youtube.com/channel/UCTK6eIJ-7kR2fqJWg09Zccg',
          image: youtube
        },
        {
          name: 'stack',
          link: 'https://stackoverflow.com/users/story/14993584?view=Cv',
          image: stack
        }
      ]

    return(
        socialList.map((social) => (
            <div key={social.name}>
                <a href={social.link} target="_blank"><img className='socialImg' src={social.image}></img></a>
            </div>
        ))
    )
}

export default Social