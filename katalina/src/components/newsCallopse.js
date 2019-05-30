import React from 'react';
import ModelsC from './modelsCallopse';

const newsCallopse = (props) => {
    const data = props.data;

    const getCallopseNews = () =>{
      let jsx =[];

      for(let i=1; i< data.length; i++){
          jsx.push(
              <li key={`keyNewsCal${i}`}>
                  <ModelsC data={data[i]} colID={props.colId} newsID={props.newsID} modelID={i}/>
              </li>
          );
      }

      return jsx;
    };

    const getRandomId = () => {
        return Math.floor(Math.random() * 900);
    };

    let id = getRandomId();
    return (
        <div>
            <p>
                <a className="callopse-links" data-toggle="collapse" href={`#A${id}`} role="button">
                    {data[0]} <i className="fas fa-arrows-alt-v"> </i>
                </a>
                <a className="callopse-links"  href={`/gallery/${props.colId}/${props.newsID}`}>
                    <i className="fas fa-filter"> </i>Filtruj
                </a>
            </p>
            <div className="collapse" id={`A${id}`}>
                <ul>
                    {getCallopseNews()}
                </ul>
            </div>
        </div>
    );
};


export default newsCallopse;