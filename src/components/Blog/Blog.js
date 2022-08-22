import React from 'react';

import './Blog.scss';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-text'>
                <h1>Blog</h1>
                <h4>A place where I share poems, short stories, and worldbuilding wikis</h4>
            </div>
            <div className='blog-cards'>
                <div className='jumbo-card'>
                    <img src=''></img>
                    <h1>Most Recent Article</h1>
                </div>
                <div className='side-card-container'>
                    <div className='side-card'>
                        Side Card 1
                    </div>
                    <div className='side-card'>
                        Side Card 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;