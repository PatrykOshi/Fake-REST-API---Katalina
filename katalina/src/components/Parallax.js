import React from 'react';

const Parallax = (props) => {

    const parralaxStyle ={
        backgroundImage: `url(${props.imgSrc})`,
        height: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        WebkitFilter: 'grayscale(100%)'
    };
    return <div style={parralaxStyle}> </div>;

};

export default Parallax;