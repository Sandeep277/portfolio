import React from 'react'
import './bottomSection.css'

import { useNavigate } from 'react-router-dom';

const BottomSection = () => {

  const navigate = useNavigate();

  const handleDivClickContact = () => {
      navigate('/contact');
  };

  return (
    <div className='bottomSection'>
      <div className="bottomLeft bottomCommon">
            <div className="techStack">
            </div>
            <div className="techAbout">
                <p><span>SPECIALIZATION</span></p>
                <h3>Services Offering</h3>
            </div>
       </div>
       <div onClick={handleDivClickContact} className="bottomRight bottomCommon">
            <div className="techStack">
            </div>
            <div className="techAbout">
              <div className='workTogether'>
                <p>Let's</p>
                <p>Work <span>together</span></p>
              </div>
            </div>
       </div>
    </div>
  )
}

export default BottomSection
