import React from 'react';
import booked from '../../../images/booked.jpg'

const Booked = () => {
    return (
        <div>
            <h2 className="text-center mt-5">Your tour is booked</h2>
            <img className="mx-auto d-block" src={booked} alt="" />
        </div>
    );
};

export default Booked;