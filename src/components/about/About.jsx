import React from 'react'
import './about.css'
import ProfilePic from '../assets/profile.jpg'

import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import GitHub from '../assets/github.png'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <>
            <div className="aboutSection">
                <div className="LogoImg">
                    <img src={ProfilePic} alt="aboutme" />
                    <div className='aboutme-text'>
                        <h3>Sandeep Kushwaha</h3>
                        <h3>sandeepak404@gmail.com</h3>
                        <div className='social-Links'>
                            <div className='socials'><a href="https://twitter.com/twtsandeep"><img src={Twitter} alt="twitter-icon" /></a></div>
                            <div className='socials'><a href="https://github.com/Sandeep277"><img src={GitHub} alt="github-icon" /></a></div>
                            <div className='socials'><a href="https://www.linkedin.com/in/sandeep-kushwaha-3a5428201/"><img src={Linkedin} alt="linkedin-icon" /></a></div>
                        </div>
                        <Link to='/contact'><button>Contact Me</button></Link>
                    </div>
                </div>
                <div className="aboutMeSection">
                    <div className="selfSummary">
                        <h1>SELF SUMMARY!</h1>
                    </div>
                    <div className="moreAboutMe">
                        <h4>Sandeep Kushwaha</h4>
                        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                        <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href=""></a>Linkedin where I post useful content related to Web Development and Programming
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
