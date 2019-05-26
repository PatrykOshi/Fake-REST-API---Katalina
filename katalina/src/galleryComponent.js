import React from 'react';
import './css/gallery.css';
import {Link} from 'react-router-dom';

const galleryComponent = (props) => {

    return(
        <Link className="col-12 col-md-4" key={`index${props.valueForKey}`} to={{
            pathname: `/productView/${props.colLink}/${props.newsLink}/${props.modeLink}/${props.colorLink}`
        }}>
            <img className="img-fluid" src={require(`${props.img}`)} alt=""/>
            <p className="text-center">
                {props.name} <br/>
                {props.color} <br/>
            </p>
        </Link>
    );
};

export default galleryComponent;