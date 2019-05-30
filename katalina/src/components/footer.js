import React from 'react';
import devider from '../content/decoration-elements/dividerF.png'


const Footer = (props) => {

    return(
        <div>
            <div style={{
                height:"250px"
            }}>

            </div>
            <div  style={{backgroundColor: "Black", position:"absolute",bottom:"0", height:"auto",width:"100%"}}>
                <img  src={devider} alt="" style={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    visibility: `${props.noDevider === true ? 'hidden': ''}`
                }}/>

                <p className="text-center" style={{
                    paddingTop:`${props.noDevider === true ? '40': '100'}px`,
                    color: "white"
                }}>
                    Copyrights 2019 by Patryk Oshibuchi. All rights reserved.<br />
                    Projekt i realizacja: Patryk Oshibuchi
                </p>
            </div>
        </div>
    );
};

export default Footer;