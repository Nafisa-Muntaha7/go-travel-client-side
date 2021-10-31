import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Register from '../Register/Register';

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data)
    };

    const handleBooking = () => {
        history.push('/place-order');
    };

    return (
        <div className="text-center">
            <h2 className="my-3 text-info">Shipping</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" className="px-5" defaultValue={user.displayName} {...Register("name")} />
                <br />
                <input placeholder="Email" defaultValue={user.email} className="m-3 px-5" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">This field is required </span>}
                <br />
                <input placeholder="Address" className="px-5" {...register("address", { required: true })} />
                <br />
                <input placeholder="Phone" defaultValue="" className="m-3 px-5" {...Register("phone", { required: true })} />
                <br />
                <input className="btn btn-info mt-3" type="submit" />
                <br />
                <button onClick={handleBooking} className="btn btn-dark m-3">Place order</button>
            </form>
        </div>
    );
};

export default BookingForm;