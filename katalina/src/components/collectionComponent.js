import React from 'react';
import '../css/Collections/collectionComponent.css';

const CollectionsComponent = (props) => {


    const getContent = () => {
        if(props.altTag === "LA PASSION" || props.altTag === "EN VOGUE"){
            return (
                <div className="col-12 col-md">
                    <img style={{marginLeft:"20px"}} className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
                </div>
            );
        }else{
            return(
                <div className="col-12 col-md">
                    <img className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
                </div>
            );
        }

    };
    return (
        getContent()
    );
};

export default CollectionsComponent;