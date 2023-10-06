import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
            }, (error) => {
                console.log(error.text);
            });
        setLoading(false);
    };

    return (
        <>
            <div className='contact'>
                <form ref={form} onSubmit={sendEmail}
                    className="contactDetails">
                    <p>Let's work <span>Togather.</span></p>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Name *' />
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='Email *' />
                    <label>Message</label>
                    <input type="text" name="message" placeholder='Message' />
                    <button type='submit' value="Send" >{loading ? 'Sending Message...' : 'Send Message'}</button>
                </form>
            </div>
        </>
    )
}

export default Contact
