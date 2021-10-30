import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'

const Tour = (props) => {
    const { name, img, price, review, shortDes } = props.tour;
    return (
        <div className="single-tour">
            <img src={img} className="w-75 rounded-3" alt="" />
            <h2 className="p-2 fw-bold">{name}</h2>
            <h4>Booking Price: {price}  <i className="fas fa-star"></i> {review}</h4>
            <h6>{shortDes}</h6>
            <button className="btn btn-dark"><Link className="text-decoration-none" to="/booking-review">Book Now</Link></button>
        </div>

    );
};

export default Tour;