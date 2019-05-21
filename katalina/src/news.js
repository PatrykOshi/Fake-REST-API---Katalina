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

        for(let i = 0; i<newsFrames.length; i++){
            jsxArray.push(
                <div className={`carousel-item ${i === 1 ? 'active':''}`} key={i}>
                    <img src={require(`${logo}`)} alt={data[data[0].last].name}/>
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
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-inner">
                        {getCarouselItems()}
                        {console.log(newsFrames)}
                    </div>
                </div>
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