import React from 'react';

const MobileNav = () =>{
    return (
        <nav className="mobileNavBar">
            <div>
                <img className="img-fluid mobileLogo" src={require('../css/logo.png')} alt="Katalina-logo"/>
            </div>
            <button className="navbar-toggler" data-toggle="collapse" href="#navBarCallapse">
                <i className="fas fa-bars" style={{color: 'white'}}> </i>
            </button>
            <div className="collapse mobileNavContent" id="navBarCallapse">
                <p style={{color: 'white'}}>
                    asdawdasdwaaaaaaaaa<br/>
                    asdawdasdwaaaaaaaaa<br/>
                    asdawdasdwaaaaaaaaa<br/>
                </p>
            </div>
        </nav>
    );
};

export default MobileNav;