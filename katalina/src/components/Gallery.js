import React from 'react';
import {Link} from 'react-router-dom';

const Gallery = (props) => {

    return (
        <div>
            <Link to="/">
                Home
            </Link>

            <p>
                {props.location.test}
            </p>
        </div>
    );

};

export default Gallery;