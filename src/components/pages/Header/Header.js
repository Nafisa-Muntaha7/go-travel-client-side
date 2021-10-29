import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
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
                <NavLink style={activeStyle} to="/1">1</NavLink>
                <NavLink style={activeStyle} to="/2">2</NavLink>
                <NavLink style={activeStyle} to="/3">4</NavLink>
            </div>


        </div >
    );
};

export default Header;