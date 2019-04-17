import React from 'react';
import '../css/Collections/collectionComponent.css';

const CollectionsComponent = (props) => {

    return (
        <div className="col-12 col-md">
            <img className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
        </div>
    );
};

export default CollectionsComponent;