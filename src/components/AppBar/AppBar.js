import React from 'react';
import { Link } from 'react-router-dom';

import './AppBar.scss';

const AppBar = () => {
    return (
        <div className='contact-appbar'>
            <h1>Contact</h1>
            <span className='appbar-links'>
                <Link className='appbar-link' to='/'>Home</Link>
            </span>
        </div>
    );
};

export default AppBar;