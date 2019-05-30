import React from 'react';
import ColectionC from './colletionCallopse';

const sideSection = (props) => {
    const data = props.data;

    const getCallopseCollections = () =>{
        let jsx = [];
        for(let i=1; i< data.length; i++){
            jsx.push(
                <li key={`callopseColec${i}`}>
                    <ColectionC data={data[i]} key={`${i}col`}/>
                </li>
            )
        }

        return jsx;
    };

    return(
        <div className="col-12 col-md-2" style={ {position: `${props.width <= 767 ? 'relative' : 'fixed'}`,height: `${props.width <= 767 ? 'auto': '100%'}`,overflow:`${props.width <= 767 ? '': 'scroll'}`}}>
            <p>
                <a className="callopse-links" data-toggle="collapse" href="#offer" role="button">
                    Nasze kolekcje <i className="fas fa-arrows-alt-v"> </i>
                </a>
            </p>
            <div className="collapse" id="offer">
                <ul>
                    {getCallopseCollections()}
                </ul>
            </div>
        </div>
    );
};

export default sideSection;