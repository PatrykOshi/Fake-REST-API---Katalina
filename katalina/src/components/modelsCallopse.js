import React from 'react';
import CollorsC from './collorsCallopse';


const modelsCallopse = (props) =>{
    const data = props.data;

    const getColors = () =>{
        let jsx = [];

        for(let i=0; i< data[1].length; i++){
            jsx.push(
                <li key={`model${i}${data[1][0]}`}>
                    <CollorsC data={data[1][i]}/>
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