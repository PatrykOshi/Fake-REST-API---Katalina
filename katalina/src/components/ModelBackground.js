import React from 'react';
import '../css/modelBackground/modelB.css'

const ModelBackground = (props) => {

    return(
        <div className="mainBackground">
            <div className="scrollDownAnimation">
                <div className="chevron"> </div>
                <div className="chevron"> </div>
                <div className="chevron"> </div>
                <span className="text">Przewiń w dół</span>
            </div>
        </div>
    );
};

export default ModelBackground;