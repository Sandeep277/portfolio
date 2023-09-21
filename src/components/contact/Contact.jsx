import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className="contactDetails">
                    <p>Let's work <span>Togather.</span></p>
                    <input type="text" placeholder='Name *' />
                    <input type="email" placeholder='Email *' />
                    <input type="text" placeholder='Subject *' />
                    <input type="text" placeholder='Message' />
                    <button>Send Message</button>
                </div>
            </div>
        </>
    )
}

export default Contact
