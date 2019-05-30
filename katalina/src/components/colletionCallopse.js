import React from 'react';
import NewsC from './newsCallopse';

const colletionCallopse = (props) =>{
    const data = props.data;

    const getCallopseNews = () => {
        let jsx = [];

        for(let i=0; i<data.news.length; i++){
            jsx.push(
              <li key={`colCalopse${i}`}>
                  <NewsC data={data.news[i]} key={`${i}news${data.news[i][0]}`}/>
              </li>
            );
        }

        return jsx;
    };

    return(
        <div>
            <p>
                <a className="callopse-links" data-toggle="collapse" href={`#col${data.name}`} role="button">
                    {data.name} <i className="fas fa-arrows-alt-v"> </i>
                </a>
            </p>
            <div className="collapse" id={`col${data.name}`} >
                <ul>
                    {getCallopseNews()}
                </ul>
            </div>
        </div>
    );
};


export default colletionCallopse;