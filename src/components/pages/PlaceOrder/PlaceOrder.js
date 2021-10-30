import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Booking from '../Booking/Booking';
import BookingForm from '../BookingForm/BookingForm';

const PlaceOrder = () => {
    const [bookings, setBookings] = useState([]);
    const { _id } = useParams();
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridRowGap: '10px'
    }
    useEffect(() => {
        fetch(`https://guarded-tor-97154.herokuapp.com/tours/${_id}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className="my-5 p-4">
            <h3>Booked tours</h3>
            <div style={style}>
                {
                    bookings.map(booking => <Booking booking={booking}></Booking>)
                }
            </div>
            <BookingForm />
        </div>
    );
};

export default PlaceOrder;