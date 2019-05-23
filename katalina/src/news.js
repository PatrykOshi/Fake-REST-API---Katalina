import React from 'react';
import './css/news/news.css';
import {Link} from 'react-router-dom';

const News = (props) => {
    const data = props.data;
    const newsLength = data[data[0].last].news.length-1;
    const newsFrames = data[data[0].last].news[newsLength];
    const logo = props.data[data[0].last].logo;

    const getCarouselItems = () =>{
        let jsxArray = [];

        for(let i = 1; i<newsFrames.length; i++){
            jsxArray.push(
                <div className="col-6 col-md-3" key={i}>
                    <div className="container">
                        <img className="img-fluid" src={require(`${logo}`)} alt={data[data[0].last].name}/>
                        <img className="img-fluid" src={require(`${newsFrames[i][1][0].img2}`)} alt={data[data[0].last].name}/>
                        Model:{newsFrames[i][0]}
                        <Link to={{
                            pathname: `/productView/${data[0].last}/${newsLength}/${i}/${0}`
                        }}> Go to {newsFrames[i][0]} </Link>
                    </div>
                </div>
            );
        }
        return(
            jsxArray
        );
    };
    return(
        <div className="container-fluid">
            <h2 className="text-center">
                {data[data[0].last].news[newsLength][0]}
            </h2>
            <div className="row">
                {getCarouselItems()}
            </div>

            <div className="row">
                <div className="center-block">
                    <Link className="btn btn-outline-dark" to={{pathname: "/gallery"}}>
                            Zobacz pełną ofertę
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default News;