import React from 'react';

const Booking = (props) => {
    const booking = {
        margin: '10px',
        padding: '15px'
    }
    const { name, img, price, review, description } = props.booking
    return (
        <div style={booking}>
            <img src={img} className="w-75 rounded-3" alt="" />
            <h2 className="p-2 fw-bold">{name}</h2>
            <h4>Booking Price: {price}  <i className="fas fa-star"></i> {review}</h4>
            <h6>{description}</h6>
        </div>
    );
};

export default Booking;