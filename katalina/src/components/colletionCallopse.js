import React from 'react';
import NewsC from './newsCallopse';
import { Link } from 'react-router-dom';

const colletionCallopse = (props) =>{
    const data = props.data;

    const getCallopseNews = () => {
        let jsx = [];

        for(let i=0; i<data.news.length; i++){
            jsx.push(
              <li key={`colCalopse${i}`}>
                  <NewsC data={data.news[i]} key={`${i}news${data.news[i][0]}`} colId={props.colId} newsID={i} setPage={props.setPage}/>
              </li>
            );
        }

        return jsx;
    };

    const getRandomId = () => {
        return Math.floor(Math.random() * 900);
    };

    const setGalleryPage = () => {
        props.setPage(props.colId);
    };

    let id = getRandomId();
    return(
        <div>
            <p>
                <a className="callopse-links" data-toggle="collapse" href={`#col${id}`} role="button">
                    {data.name} <i className="fas fa-arrows-alt-v"> </i>
                </a>
                <Link to={`/gallery/${props.colId}`} params={{tmp:'asd'}} onClick={setGalleryPage} className="callopse-links ">
                    <i className="fas fa-filter"> </i>Filtruj
                </Link>
            </p>
            <div className="collapse" id={`col${id}`} >
                <ul>
                    {getCallopseNews()}
                </ul>
            </div>
        </div>
    );
};


export default colletionCallopse;