import React from 'react';
import '../css/AboutUs/aboutUs.css';
import imgSrc from '../content/pics/AboutUs.jpg';

const AboutUs = (props) => {

    const showImg = () =>{
        if(parseInt(props.currentWidth) <= 1300){
            return '';
        }
        else{
            return <img className="img-fluid" src={imgSrc} alt=""/>;
        }
    };

    const getColWidthBoostrap = () =>{
        if(parseInt(props.currentWidth) <= 1300){
            return 'col-12';
        }
        else{
            return 'col-lg-5'
        }
    };

    return (
        <section className="container-fluid">
            <div className="row">
                <div>
                    {showImg()}
                </div>
                <div className={getColWidthBoostrap()}>
                    <p className="text-center aboutUsContent">
                        Chcąc wyróżnić się na rynku systematycznie wprowadzamy nową ofertę. Wszystkie wyroby posiadają
                        Deklarację Zgodności (znak CE) oraz zostały wpisane do rejestru wyrobów medycznych.
                        <br />
                        <br />
                        <br />
                        Wiodące kolekcje opraw korekcyjnych to:
                        <br />
                        <br />
                        MOTTO, EN VOGUE, LA PASSION, TODD, PRELUDIUM, SHOUT,
                        LA CORONA, TALISMAN, VISAGE, GEOS.
                        <br />
                        Serdecznie zapraszamy do współpracy!!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;