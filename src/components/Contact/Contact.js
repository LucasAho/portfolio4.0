import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs, { init } from 'emailjs-com';

import './Contact.scss';

init('ChvbgHdeEhHEse6Pk');

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const isValidEmail = email => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (isValidEmail(email)) {
            const serviceId = 'service_d8fjw5w';
            const templateId = 'template_c4qxm8i';;
            const templateParams = {
                name,
                email,
                message
            }
            emailjs.send(serviceId, templateId, templateParams)
                .then(res => console.log(res))
                .catch(error => console.log(error));

            if (name && email && message) {
                setName('');
                setEmail('');
                setMessage('');
                setEmailSent(true);
            } else {
                alert('Please fill out all fields');
            }
        } else {
            alert('Please use valid email');
        }
    }

    return (
        <div className='contact-container'>
            <div className="contact-form" >
                <label className='contact-label' for="name">Name *</label>
                <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                <label className='contact-label' for="email">Email *</label>
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                <label className='contact-label' for="message">Message *</label>
                <textarea rows={7} placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button onClick={submit}>Send Message</button>
                <span className={emailSent === true ? 'visible' : 'invisible'}>
                    Thank you for your message! I'll be in touch soon!
                    <Link to='/'>Return Home</Link>
                </span>
            </div >
            <div className='contact-info'>
                <span>
                    <h3>Email:</h3>
                    <h4>aholucascode@gmail.com</h4>
                </span>
                <span>
                    <h3>Phone:</h3>
                    <h4>(719)464-7841</h4>
                </span>
                <span>
                    <h3>Instagram:</h3>
                    <h4>lucas_asher_a</h4>
                </span>
            </div>
        </div>
    );
};

export default Contact;