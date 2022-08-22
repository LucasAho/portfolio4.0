import React from 'react';

import Footer from "../../components/Footer/Footer";
import Contact from '../Contact/Contact';
import AppBar from '../AppBar/AppBar';
import './Compile.scss';

const ContactCompiler = () => {
    return (
        <div className='contact-compile'>
            <AppBar />
            <div className='contact-form-container'>
                <Contact />
            </div>
            <div className='contact-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default ContactCompiler;