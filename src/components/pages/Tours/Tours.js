import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://guarded-tor-97154.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className="my-5 p-4 ">
            <h4>Popular Tours</h4>
            <h1 className="fw-bold pb-5">We promise, it won't get boring.</h1>
            <div className="tours">
                {
                    tours.map(tour => <Tour tour={tour} ></Tour>)
                }

            </div>
        </div>
    );
};

export default Tours;