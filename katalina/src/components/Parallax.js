import React from 'react';

const Parallax = (props) => {

    const parralaxStyle ={
        backgroundImage: `url(${props.imgSrc})`,
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        webkitBackgroundSize: 'cover',
        WebkitFilter: 'grayscale(100%)'
    };
    return <div className="parralax" style={parralaxStyle}> </div>;

};

export default Parallax;