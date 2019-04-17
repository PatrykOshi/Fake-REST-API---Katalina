import React from 'react';
import '../css/contact.css';


const Trader = (props) => {

    const getRegions = () => {
        return(
            props.regions.map(
                (region,index) => <li className="list-group-item" key={index}>{region}</li>
            )
        );
    };

    return(
        <div className="col-12 col-md-3 traderWarpper ">
            <div className="text-center iconContainer">
                <i className="fas fa-user-tie fa-5x"> </i>
            </div>
            <div className="container textContent">
                <p className="text-center">
                    {props.name} {props.surname}
                    <br />
                    <br />
                    tel: {props.phone}
                    <br />
                    e-mail: {props.mail}
                </p>

                <ul className="list-group list-group-flush">
                    {getRegions()}
                </ul>
            </div>
        </div>
    );
};

export default Trader;