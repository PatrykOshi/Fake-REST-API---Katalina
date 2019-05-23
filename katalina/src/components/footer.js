import React from 'react';
import devider from '../content/decoration-elements/dividerF.png'


const Footer = () => {

    return(
        <div  style={{backgroundColor: "Black", position:"absolute", height:"auto",width:"100%"}}>
            <img  src={devider} alt="" style={{
                position: "absolute",
                top: "0",
                width: "100%"
            }}/>

            <p className="text-center" style={{
                paddingTop:"100px",
                color: "white"
            }}>
                Copyrights 2018 by Patryk Oshibuchi. All rights reserved.<br />
                Projekt i realizacja: Patryk Oshibuchi
            </p>
        </div>
    );
};

export default Footer;