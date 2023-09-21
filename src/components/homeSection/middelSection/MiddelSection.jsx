import React from 'react'
import './middelSection.css'
import Html from '../../assets/html-5.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/js.png'
import ReactIc from '../../assets/react.png'
import NodeJs from '../../assets/nodejs.png'
import Java from '../../assets/java.png'
import Linkedin from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import GitHub from '../../assets/github.png'

const MiddelSection = () => {
  return (
    <div className='middelSection'>
      <div className="midLeft midCommon">
        <div className="logos"></div>
        <div className="techAbout">
          <img src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="blogs" />
          <h3>GoTo Blogs</h3>
        </div>
      </div>
      <div className="midMid">
        <div className="techStack">
          <div className='noOfTech'>
            <div className="tech"><img src={Html} alt="html" /></div>
            <div className="tech"><img src={CSS} alt="css" /></div>
            <div className="tech"><img src={JS} alt="JavaScript" /></div>
            <div className="tech"><img src={ReactIc} alt="react-icon" /></div>
            <div className="tech"><img src={NodeJs} alt="nodeJS" /></div>
            <div className="tech"><img src={Java} alt="Java" /></div>
          </div>
          <div className="techAbout techSpec">
            <h3>My Skills</h3>
            {/* <p>Services Offering</p> */}
          </div>
        </div>
      </div>
      <div className="midLeft midCommon">
        <div className="logos"></div>
        <div className="techAbout">
          <div className='socialLinks'>
            <div className='socials'><a href="https://twitter.com/twtsandeep"><img src={Twitter} alt="twitter-icon" /></a></div>
            <div className='socials'><a href="https://github.com/Sandeep277"><img src={GitHub} alt="github-icon" /></a></div>
            <div className='socials'><a href="https://www.linkedin.com/in/sandeep-kushwaha-3a5428201/"><img src={Linkedin} alt="linkedin-icon" /></a></div>
          </div>
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  )
}

export default MiddelSection
