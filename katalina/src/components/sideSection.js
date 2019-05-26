import React from 'react';


const sideSection = (props) => {
    return(
        <div className="col-12 col-md-2" style={
            {
                position: `${props.width <= 767 ? 'relative' : 'fixed'}`,
                height: `${props.width <= 767 ? 'auto': '100%'}`,
                overflow:`${props.width <= 767 ? '': 'scroll'}`,
                backgroundColor:"pink"
            }
        }>
            <div>
                <a href="/gallery">cick</a>
            </div>
        </div>
    );
};

export default sideSection;