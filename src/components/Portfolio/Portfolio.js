import React from 'react';
import Slider from 'react-slick';

import './Portfolio.scss';
import PortfolioCard from './subcomponents/PortfolioCard';
import { cardData } from './subcomponents/cardData.js';

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let renderCards = '';

    renderCards = cardData.map((card, i) => (
        <PortfolioCard key={i} data={card} />
    ));

    return (
        <div className='portfolio-container'>
            <div className='header-text'>
                <div className='portfolio-text'>
                    <h1>Portfolio</h1>
                    <h4>A showcase of skills cultivated in full stack development. The following applications display understanding of RESTful APIs, the MERN stack, high fluency in ES6, and competency in visual design.</h4>
                </div>
            </div>
            <Slider {...settings}>
                {renderCards}
            </Slider>
        </div>
    );
};

export default Portfolio;