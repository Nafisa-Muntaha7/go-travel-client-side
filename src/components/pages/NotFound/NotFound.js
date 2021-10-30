import React from 'react';
import error from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={error} className="mx-auto d-block" alt="" />
            <h1 className="text-center">The page you're looking for is not found.</h1>
        </div>
    );
};

export default NotFound;