import React from 'react'
import './home.css'
import MiddelSection from '../homeSection/middelSection/MiddelSection'
import BottomSection from '../homeSection/bottomSection/BottomSection'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ProfilePic from '../assets/profile.jpg';
import Project from '../assets/developer-coding-in-php.jpg'

const Home = () => {

    const navigate = useNavigate();
    const handleDivClickProject = () => {
        navigate('/about');
    };
    const handleDivClickWork = () => {
        navigate('/works');
    }
    return (
        <>
            <div className="homeSection">
                <div className='homeLeft'>
                    <div className="personImg">
                        <img className="person" src={ProfilePic} alt="personimg" />
                    </div>
                    <div className="aboutPerson">
                        <p><span>A WEB DEVELOPER</span></p>
                        <h2>Sandeep Kushwaha</h2>
                        <p>I am a Web Developer based in India</p>
                    </div>
                </div>

                {/* right section  */}
                <div className="rightSection">
                    <div className="homeRight">
                        <div onClick={handleDivClickProject} className="aboutMe" style={{ marginRight: '20px' }}>
                            <div className='aboutmeImg'>
                                <img className='images'
                                    src="https://t4.ftcdn.net/jpg/00/94/88/23/360_F_94882306_gdTjxS01ptuEjEy0GQVZAhZNjiWsMfpt.jpg"
                                    alt="projects" />
                            </div>
                            <div className='aboutText'  >
                                <p>ABOUT ME</p>
                                <Link to={'/about'}><span className='largeText'>Credentials</span></Link>
                            </div>
                        </div>

                        <div onClick={handleDivClickWork} className="aboutMe">
                            <div className='aboutmeImg'>
                                <img className='images'
                                    src={Project}
                                    alt="projects" />
                            </div>
                            <div className='aboutText'>
                                <p>All</p>
                                <Link><span className='largeText'>Projects</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MiddelSection />
            <BottomSection />
        </>
    )
}

export default Home
