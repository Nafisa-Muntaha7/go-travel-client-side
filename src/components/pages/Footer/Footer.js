import React from 'react';
import logo from '../../../images/logo.png'
import travel from '../../../images/go-travel.jfif'

const Footer = () => {
    return (
        <div className=" bg-dark text-white p-5">
            <div className="d-flex">
                <div className="col-4">
                    <img src={logo} alt="" />
                    <p><i className="fas fa-envelope pt-4"></i> gotravelagent@email.com</p>
                    <p><i className="fas fa-phone-square-alt"></i> 1 562 867 5309</p>
                    <p><i className="fas fa-map-marker-alt"></i> Broadway &amp; Morris St, New York</p>
                </div>

                <div className="col-4 py-5">
                    <p>About Us</p>
                    <p>Success</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <img src={travel} className="w-100 rounded-3" alt="" />
                </div>
            </div>
            <footer className="bg-info p-2 mt-4 rounded-2 text-center">Copyright &copy; Go Travel.</footer>
        </div>

    );
};

export default Footer;