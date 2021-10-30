import React from 'react';
import Banner from '../Banner/Banner';
import HomeExtraOne from '../HomeExtraOne/HomeExtraOne';
import HomeExtraTwo from '../HomeExtraTwo/HomeExtraTwo';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tours />
            <HomeExtraOne />
            <HomeExtraTwo />
        </div>
    );
};

export default Home;