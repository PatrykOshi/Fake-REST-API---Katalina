import React from 'react';
import '../css/Separator/separator.css';
import img1 from '../content/decoration-elements/divider2.png'
import img2 from '../content/decoration-elements/divider.png'

const Separator = (props) => {
    let classForImg = 'imgSpearator';

    const getDeviderByNumer = () => {
        if (parseInt(props.devider) === 1) {
            return <img className={classForImg} src={img1} alt=""/>;
        }if(parseInt(props.devider) === 2){
            return <img className={classForImg} src={img2} alt=""/>;
        }
    };

    return (
        <div className="separator container-fluid" id="onas">
            <p className="text-center separatorContent">
                {props.title}
            </p>
            {getDeviderByNumer()}
        </div>
    );
};

export default Separator;