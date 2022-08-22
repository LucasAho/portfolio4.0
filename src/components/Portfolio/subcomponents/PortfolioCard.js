import React from 'react';

import '../Portfolio.scss';


const PortfolioCard = ({ data }) => {
    return (
        <div className='card-item'>
            <div className='card-img'>
                <img alt={data.title} src={data.img} />
            </div>
            <div className='card-bottom'>
                <div className='card-text'>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>

            </div>
            <div className='card-buttons'>
                {data.link !== '' ?
                    <a href={data.link}>Visit the Site</a>
                    :
                    <p>Not Deployed</p>
                }
                <a href={data.code}>See the Code</a>
            </div>
        </div>
    );
};

export default PortfolioCard;