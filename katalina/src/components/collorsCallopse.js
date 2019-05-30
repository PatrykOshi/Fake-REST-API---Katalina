import React from 'react';


const collorsCallopse = (props) => {
    const data = props.data;

    return (
        <div>
            <p>
                <a className="callopse-links" data-toggle="collapse" href={`#models${data[0]}idCalopse`} role="button">
                    {data.color} <i className="fas fa-arrows-alt-v"> </i>
                </a>
            </p>
            <div className="collapse" id={`models${data[0]}idCalopse`}>
                <ul>

                </ul>
            </div>
        </div>
    );
};

export default collorsCallopse;