import React from 'react';

const SliderComponent = (props) => {

    const isAct = props.act ? 'active': '';

    return(
        <div className={`carousel-item ${isAct}`} >
            <img className="d-block w-100" src={props.imgSrc} alt="First slide" />
        </div>
    );
};

export default SliderComponent;