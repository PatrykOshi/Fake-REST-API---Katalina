import React from 'react';
import {Link} from 'react-router-dom';

const collorsCallopse = (props) => {
    const data = props.data;

    return (
        <div>
            <p>
                <Link className="callopse-links" to={{
                    pathname:`/productView/${props.colID}/${props.newsID}/${props.modelID}/${props.colorID}`,
                }}>
                    {data.color}<i className="fas fa-link"> </i>
                </Link>
            </p>
        </div>
    );
};

export default collorsCallopse;