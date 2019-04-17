import React from 'react';
import '../css/contact.css';
const InfoComponent = (props) => {
    return(
        <div className="col-4 text-center">
            <img className="img-fluid contactInfoIcon" src={props.icon} alt=""/>
            <p className="contactText">
                {props.textContent}
            </p>
        </div>
    );
};


export default InfoComponent