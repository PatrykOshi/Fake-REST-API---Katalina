import React from 'react';
import '../css/Separator/separator.css';
import img1 from '../content/decoration-elements/divider2.png'
import img2 from '../content/decoration-elements/divider.png'

const Separator = (props) => {

    const getDeviderByNumer = () => {
        if (parseInt(props.devider) === 1) {
            return <img src={img1} alt=""/>;
        }if(parseInt(props.devider) === 2){
            return <img src={img2} alt=""/>;
        }
    };

    return (
        <div className="separator container-fluid">
            <p className="text-center">
                {props.title}
            </p>
            {getDeviderByNumer}
        </div>
    );
};

export default Separator;