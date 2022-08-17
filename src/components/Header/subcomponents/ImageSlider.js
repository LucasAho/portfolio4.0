import React, { useState } from 'react';
import { SliderData } from './sliderData';
import './Slider.scss'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    setTimeout(
        () => setCurrent(current === length - 1 ? 0 : current + 1),
        10000
    );
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className='slider'>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img alt='Carousel' className='media' src={slide.image} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
export default ImageSlider;