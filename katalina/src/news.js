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
                <div className="col-6 col-md-3 containerLinks" key={i} >
                    <Link className="linksToProductView" to={{
                        pathname: `/productView/${data[0].last}/${newsLength}/${i}/${0}`
                    }}>
                        <div className="container">
                            <img className="img-fluid center-block-logo" src={require(`${logo}`)} alt={data[data[0].last].name}/>
                            <img className="img-fluid" src={require(`${newsFrames[i][1][0].img2}`)} alt={data[data[0].last].name}/>
                            <p className="text-center model-name-news">
                                Model:{newsFrames[i][0]}
                            </p>
                        </div>
                    </Link>
                </div>
            );
        }
        return(
            jsxArray
        );
    };


    return(
        <div className="container-fluid">
            <Link style={{
               color:"black"
            }} to={{
                pathname: `/gallery/${data[0].last}/${newsLength}`
            }}>
                <h2 className="text-center">
                    {data[data[0].last].news[newsLength][0]}
                </h2>
            </Link>
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