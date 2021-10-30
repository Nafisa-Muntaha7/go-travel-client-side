import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    const activeStyle = {
        color: 'black',
        textDecoration: 'none',
        margin: '15px',
        fontWeight: 'bold',
        padding: '5px'
    }

    return (
        <div className='d-flex ms-4 p-4 header'>
            <div className="col-3">
                <img src={logo} alt="" />
            </div>

            <div className="col-9 fs-5 bg-info rounded-3 p-2 text-center">
                <NavLink style={activeStyle} to="/home">Home</NavLink>
                <NavLink style={activeStyle} to="/booking-review">Booking</NavLink>
                <NavLink style={activeStyle} to="/manage-booking">Manage Booking</NavLink>
                <NavLink style={activeStyle} to="/add-place">Add Places</NavLink>
                <NavLink style={activeStyle} to="/login">Login</NavLink>
                <span>Logged in: {user.displayName}</span>
                {user.email && <button className="btn btn-dark m-1" onClick={logout}>Log out</button>}
            </div>
        </div >
    );
};

export default Header;