import React from 'react';
import '../css/contact.css'
import InfoComponent from './InfoComponent';
import Trader from './Trader';
import phoneIcon from '../content/icons/phone.png';
import mail from '../content/icons/mail.png';
import address from '../content/icons/home.png';


const Contact = () => {

    return (
        <div className="container-fluid">
            <div className="row" style={{marginTop: '100px'}}>
                <div className="container">
                    <div className="row">
                        <InfoComponent phone="(22) 897 11 30" type={"phone"} icon={phoneIcon}/>
                        <InfoComponent mail="Biuro@katalina.pl  reklamacje: reklamacja@katalina.pl" icon={mail}/>
                        <InfoComponent address="Kabaretowa 21, Warszawa" icon={address}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid traders">
                <p className="text-center title">
                    NASI HANDLOWCY
                </p>
                <div className="row" style={{marginTop: '100px'}}>
                    <div className="col-0 col-md-1"></div>
                    <Trader phone="510-415-345" name="Paweł" surname="Radel" mail="p.radel@katalina.pl" regions={[
                        'Mazowieckie',
                        'Lubelskie',
                        'Podkarpackie',
                        'Świętokrzyskie',
                        'Warmińsko-mazurskie',
                        'Podlaskie'
                    ]}/>
                    <div className="col-0 col-md-2"></div>
                    <Trader phone="508-215-289" name="Tomasz" surname="Kosiński" mail="t.kosinski@katalina.pl"
                            regions={[
                                'Lubuskie',
                                'Wielkopolskie',
                                'Łódzkie',
                                'Małopolskie',
                                'Kujawsko-Pomorskie'
                            ]}/>
                </div>
                <div className="row">
                    <div className="col-0 col-md-1"></div>
                    <Trader phone="510-775-090" name="Arkadiusz" surname="Mandes" mail="a.mandes@katalina.pl" regions={[
                        'Opolskie',
                        'Małopolskie',
                        'Mazowieckie'
                    ]}/>
                    <div className="col-0 col-md-2"></div>
                    <Trader phone="501-458-277" name="Konrad" surname="Strzelecki" mail="k.strzelecki@katalina.pl"
                            regions={[
                                'Dolnośląskie',
                                'Wielkopolskie',
                                'Lubuskie',
                                'Opolskie'
                            ]}/>
                    <div className="col-0 col-md-4"> </div>

                        <Trader phone="509-870-265" name="Wojsciech" surname="Siekierski" mail="w.siekierski@katalina.pl"
                                regions={[
                                    'Śląskie'
                                ]}/>
                </div>
            </div>
        </div>
    );
};


export default Contact;