import React from 'react';

import './Header.scss';
import ImageSlider from './subcomponents/ImageSlider';
import { SliderData } from './subcomponents/sliderData';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-text'>
                <h1>Lucas Aho</h1>
                <h3>Author, mountaineer, and web developer</h3>
            </div>
            <div className='bio-text'>
                <p>
                    Hello! I am a full stack web developer located in Colorado.
                </p>
                <p>
                    I currently work as a Technical Support Engineer with Microsoft Azure, specializing in App Service Development and OSS support.
                    This job is seldom easy - everyday I am thrust into new and unique environments which I must quickly learn to navigate and troubleshoot.
                    However, this daily challenge allows me to constantly progress as a multi-faceted developer with a good sense for technology and people.
                </p>
                <p>
                    While development is my passion, I've also taught myself the basics of DevSecOps, to make up for my lack of a traditional college education. I am CompTIA Sec+ certified, and studying for my Network+ and Server+ certifications.
                </p>
                <p>
                    Outside of work and honing my development skills, I spend as much time as possible out in the mountains.
                    Alpinism and mountaineering are my greatest passions, and I have climbed 39 14,000+ foot peaks in the last 2 years. I plan to summit all 72 14ers in the contiguous U.S
                </p>
                <p>
                    I also write science-fiction and poetry.
                    My science-fiction novel has been a work in progress since 2019, and much of this site is dedicated to the worldbuilding and language construction inherit to the novel's setting.
                </p>
                <p>
                    It can be difficult to balance all of these passions, but pushing through these challenges has forged me into a man that I can be proud of.
                    I know that I can achieve whatever I set my mind to, and so I set my expectations to match.
                </p>
            </div>
            <div className='image-carousel'>
                <ImageSlider slides={SliderData} />
            </div>
        </div >
    );
};

export default Header;