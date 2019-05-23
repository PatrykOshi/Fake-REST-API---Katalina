import React from 'react';
import './css/productView/productView.css';


const productViewColors = (props) => {

    const getColors = () => {
        let jsx = [];
        let data = props.data;
        let collection = props.col;
        let news = props.news;
        let modelOfFrame = props.model;

        data.map((model,index) => {
            jsx.push(
                <a key={`keyLink${index}`} className="col-4 col-md" href={`/productView/${collection}/${news}/${modelOfFrame}/${index}`}>
                    <div className="colors-links" key={`${index}colors`}>
                          <img className="img-fluid" src={require(`${model.img2}`)}  alt=""/>
                        <p className="text-center tooltip-colors" >
                            {model.color}
                        </p>
                    </div>
                </a>
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