import React from 'react';
import "./Error.scss"
const Error = ({error}) => {
    return (
        <div className='err'>
            { error }
        </div>
    );
}

export default Error;
