import React from 'react';
import MobileNav from './mobileNav';
import NavPC from './navPC';
import '../css/nav.css';

const Nav = (props) => {
    const getResponsiveNav = () => {
        if (props.currentWidth > 850) {
            return <NavPC />;
        }
        else {
            return <MobileNav />;
        }
    };
    return getResponsiveNav();
};

export default Nav;



