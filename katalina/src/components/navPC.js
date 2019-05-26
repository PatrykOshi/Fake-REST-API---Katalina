import React from 'react';
import {Link} from 'react-router-dom';

const navPC = () => {
    return (
        <nav className="responsive-nav" style={{
            zIndex:"1"
        }}>
            <a className="nav-link-to-top" href="/#top">
                <img className="img-fluid logo" src={require('../content/logo.png')} alt="Katalina-logo"/>
            </a>
            <div className="nav-links-wrapper">
                <a className="links scroll" href="/#nowosci">NOWOŚCI</a>
                <a className="links scroll" href="/#kolekcje">KOLEKCJE</a>
                <a className="links scroll" href="/#lookbook">LOOKBOOK</a>
                <a className="links scroll" href="/#kontakt">KONTAKT</a>
                <Link to={{
                    pathname:"/gallery",
                    test: "as"
                }}
                      className="links">
                    OFERTA
                </Link>

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