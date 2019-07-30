import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/Collections/collectionComponent.css';

const CollectionsComponent = (props) => {


    const getContent = () => {
        if(props.altTag === "LA PASSION"){
            return (
                <Link to={`/gallery/${props.colId}`} className={`col-12 col-md`}>
                    <div>
                        <img style={{marginLeft:"35px"}} className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
                    </div>
                </Link>
            );
        }
        if(props.altTag === "EN VOGUE"){
            return (
                <Link to={`/gallery/${props.colId}`} className={`col-12 col-md`}>
                    <div>
                        <img style={{marginLeft:"20px"}} className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
                    </div>
                </Link>
            );
        }else{
            if(props.colId === undefined){
                return(
                    <div className={`col-12 col-md`}>
                        <img className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
                    </div>
                );
            }
            return(
                <Link to={`/gallery/${props.colId}`} className={`col-12 col-md`}>
                    <div>
                        <img className="img-fluid collectionImg" src={props.imgSrc} alt={props.altTag}/>
                    </div>
                </Link>
            );
        }

    };
    return (
        getContent()
    );
};

export default CollectionsComponent;