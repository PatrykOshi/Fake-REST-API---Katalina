import React from 'react';
import './css/gallery.css';
import {Link} from 'react-router-dom';

const galleryComponent = (props) => {


    const getContentByNumberOfRows = () => {
        if(parseInt(props.row) === 12){
            return(
                <Link className={`col-12 col-md-${props.row} model-link-from-gallery`} key={`index${props.valueForKey}`} to={{
                    pathname: `/productView/${props.colLink}/${props.newsLink}/${props.modeLink}/${props.colorLink}`
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" src={require(`${props.img}`)} alt=""/>
                            </div>
                            <table className="table table-striped model-details text-center col-12 col-md-6">
                                <tbody>
                                <tr>
                                    <td>Model: {props.name}</td>
                                </tr>
                                <tr>
                                    <td>Kolor: {props.color}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Link>
            );
        }
        else{
            return(
                <Link className={`col-12 col-md-${props.row} model-link-from-gallery`} key={`index${props.valueForKey}`} to={{
                    pathname: `/productView/${props.colLink}/${props.newsLink}/${props.modeLink}/${props.colorLink}`
                }}>
<<<<<<< HEAD
                    <div className="model-img-container">
                        <img className="img-fluid model-img" src={require(`${props.img}`)} alt=""/>
                    </div>
                    <table className="table table-striped text-center">
=======
                    <img className="img-fluid" src={require(`${props.img}`)} alt=""/>
                    <table className="table table-striped model-details text-center">
>>>>>>> 8057a2d21d11d9c7dab311c8701ad1c490105ff0
                        <tbody>
                        <tr>
                            <td>Model: {props.name}</td>
                        </tr>
                        <tr>
                            <td>Kolor: {props.color}</td>
                        </tr>
                        </tbody>
                    </table>

                </Link>
            );
        }
    };
    return(
        getContentByNumberOfRows()
    );
};

export default galleryComponent;