import React from 'react';
import CollorsC from './collorsCallopse';
import {Link} from 'react-router-dom';


const modelsCallopse = (props) =>{
    const data = props.data;

    const getColors = () =>{
        let jsx = [];

        for(let i=0; i< data[1].length; i++){
            jsx.push(
                <li key={`model${i}${data[1][0]}`}>
                    <CollorsC data={data[1][i]} colID={props.colID} newsID={props.newsID} modelID={props.modelID} colorID={i}/>
                </li>
            );
        }
        return jsx;

    };

    return (
        <div>
            <p>
                <a className="callopse-links" data-toggle="collapse" href={`#models${data[0]}idCalopse`} role="button">
                    {data[0]} <i className="fas fa-arrows-alt-v"> </i>
                </a>
                <Link className="callopse-links" to={{
                    pathname:`/productView/${props.colID}/${props.newsID}/${props.modelID}/0`,
                }}>
                    <i className="fas fa-link"></i>Zobacz
                </Link>

            </p>
            <div className="collapse" id={`models${data[0]}idCalopse`}>
                <ul>
                    {getColors()}
                </ul>
            </div>
        </div>
    );
};


export default modelsCallopse;