import React from 'react';
import NewsC from './newsCallopse';

const colletionCallopse = (props) =>{
    const data = props.data;

    const getCallopseNews = () => {
        let jsx = [];

        for(let i=0; i<data.news.length; i++){
            jsx.push(
              <li key={`colCalopse${i}`}>
                  <NewsC data={data.news[i]} key={`${i}news${data.news[i][0]}`} colId={props.colId} newsID={i}/>
              </li>
            );
        }

        return jsx;
    };

    const getRandomId = () => {
        return Math.floor(Math.random() * 900);
    };

    let id = getRandomId();
    return(
        <div>
            <p>
                <a className="callopse-links" data-toggle="collapse" href={`#col${id}`} role="button">
                    {data.name} <i className="fas fa-arrows-alt-v"> </i>
                </a>
                <a className="callopse-links " href={`/gallery/${props.colId}`} >
                    <i className="fas fa-filter"> </i>Filtruj
                </a>
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