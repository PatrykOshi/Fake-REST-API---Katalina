import React from 'react';

const navPC = () => {
    return (
        <nav className="responsive-nav">
            <a className="nav-link-to-top" href="#top">
                <img className="img-fluid logo" src={require('../css/logo.png')} alt="Katalina-logo"/>
            </a>
            <div className="nav-links-wrapper">
                <a className="links" href="#nowosci">NOWOŚCI</a>
                <a className="links" href="#kolekcje">KOLEKCJE</a>
                <a className="links" href="#lookbook">LOOKBOOK</a>
                <a className="links" href="#kontakt">KONTAKT</a>

                <span className="nav-space"> </span>
                <a className="top-link-social" href="https://www.facebook.com/katalinagroup/">
                    <i className="fab fa-facebook"> </i>
                </a>
                <a className="top-link-social" href="https://www.instagram.com/katalinaoprawyokularowe/">
                    <i className="fab fa-instagram"> </i>
                </a>
            </div>
        </nav>
    );
};

export default navPC;