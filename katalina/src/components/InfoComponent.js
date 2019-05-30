import React from 'react';
import '../css/contact.css';
const InfoComponent = (props) => {

    const getPhone = () =>{
      return(
        <p className="text-center">
            (22) 897-11-30 <br /><br />
            Stacjonarny: 505-531-944<br /><br />
            MMS: 505-330-530
        </p>
      );
    };

    const getMails = () =>{
        return(
            <p className="text-center">
                Biuro@katalina.pl <br /><br />
                Zamówienia: Zamowienia@katalina.pl<br /><br />
                Reklamacje: Reklamacje@katalina.pl
            </p>
        );
    };

    const getAddress = () => {
        return(
            <p className="text-center">
                Kabaretowa 21, Warszawa
            </p>
        );
    };

    return(
        <div className="col-12 col-md-4 text-center">
            <img className="img-fluid contactInfoIcon" src={props.icon} alt=""/>
            {props.phone != null ? getPhone():''}
            {props.mail != null ? getMails():''}
            {props.address != null ? getAddress():''}
        </div>
    );
};


export default InfoComponent