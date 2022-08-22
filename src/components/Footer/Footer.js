import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <a href='https://www.instagram.com/lucas_asher_a/?hl=en'>
                <i className='fab fa-instagram fa-2x'></i>
            </a>
            <a href='https://github.com/LucasAho'>
                <i className='fab fa-github fa-2x'></i>
            </a>
            <a href='https://www.linkedin.com/in/lucas-asher-679569193/'>
                <i className='fab fa-linkedin fa-2x'></i>
            </a>
            <Link to='/contact'>
                <i className='fas fa-envelope fa-2x'></i>
            </Link>
        </div>
    );
};

export default Footer;