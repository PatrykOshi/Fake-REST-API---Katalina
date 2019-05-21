import React from 'react';
import {Link} from 'react-router-dom';

const MobileNav = () =>{
    return (
        <nav className="mobileNavBar">
            <div>
                <img className="img-fluid mobileLogo" src={require('../content/logo.png')} alt="Katalina-logo"/>
            </div>
            <button className="navbar-toggler" data-toggle="collapse" href="#navBarCallapse" aria-expanded="true" aria-controls="navBarCallapse">
                <i className="fas fa-bars" style={{color: 'white'}}> </i>
            </button>
            <div className="collapse mobileNavContent" id="navBarCallapse">
                <ul>
                    <li className="listOfLinksOnMobile">
                        <a className="linksMobile" href="#nowosci">NOWOŚCI</a>
                    </li>
                    <li className="listOfLinksOnMobile">
                        <a className="linksMobile" href="#kolekcje">KOLEKCJE</a>
                    </li>
                    <li className="listOfLinksOnMobile">
                        <a className="linksMobile" href="#lookbook">LOOKBOOK</a>
                    </li>
                    <li className="listOfLinksOnMobile">
                        <a className="linksMobile" href="#kontakt">KONTAKT</a>
                    </li>
                    <li className="listOfLinksOnMobile">
                        <Link to={{
                            pathname:"/gallery",
                            test: "as"
                        }}
                              className="links">
                            OFERTA
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>);
};

export default MobileNav;