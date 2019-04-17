import React from 'react';
import SliderComponent from './SliderComponent';
import slide1 from '../content/lookbook/1.jpg';
import slide2 from '../content/lookbook/2.jpg';
import slide3 from '../content/lookbook/3.jpg';
import slide4 from '../content/lookbook/4.jpg';

const Slder = () => {
    return(
        <div id="sliderControlls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <SliderComponent imgSrc={slide1} act={true}/>
                <SliderComponent imgSrc={slide2}/>
                <SliderComponent imgSrc={slide3}/>
                <SliderComponent imgSrc={slide4}/>
            </div>
            <a className="carousel-control-prev" href="#sliderControlls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#sliderControlls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Slder;