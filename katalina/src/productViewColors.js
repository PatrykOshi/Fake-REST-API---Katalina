import React from 'react';
import './css/productView/productView.css';
import { HashLink as Link } from 'react-router-hash-link';

const productViewColors = (props) => {

    const setPageState = (col,news,model,color) =>{
        props.setPage(col,news,model,color);
    };

    const getColors = () => {
        let jsx = [];
        let data = props.data;
        let collection = props.col;
        let news = props.news;
        let modelOfFrame = props.model;

        data.map((model,index) => {
            jsx.push(
                <Link to={`/productView/${collection}/${news}/${modelOfFrame}/${index}`} onClick={() => setPageState(collection,news,modelOfFrame,index)} key={`keyLink${index}`} className="col-4 col-md">
                    <div className="colors-links" key={`${index}colors`}>
                          <img className="img-fluid" src={require(`${model.img2}`)}  alt=""/>
                        <p className="text-center tooltip-colors" >
                            {model.color}
                        </p>
                    </div>
                </Link>
            );
            return null;
        });
        return(
            jsx
        );
    };


    return(
        <div className="row">
            {getColors()}
        </div>
    );

};

export default productViewColors;