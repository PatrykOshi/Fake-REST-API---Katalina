import React from 'react';

const AboutUs = () => {

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-0 col-md-6">
                    <img className="img-fluid" src={require('../content/pics/AboutUs.jpg')} />
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-center">
                        Chcąc wyróżnić się na rynku systematycznie wprowadzamy nową ofertę. Wszystkie wyroby posiadają Deklarację Zgodności (znak CE) oraz zostały wpisane do rejestru wyrobów medycznych.


                        Wiodące kolekcje opraw korekcyjnych to:


                        MOTTO, EN VOGUE, LA PASSION, TODD, PRELUDIUM, SHOUT,
                        LA CORONA, TALISMAN, VISAGE, GEOS.

                        Serdecznie zapraszamy do współpracy!!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;