import React from 'react';
import parisopera from '../../../images/paris-opera.jpg'
import parisnight from '../../../images/paris-night.jpg'

const HomeExtraTwo = () => {
    return (
        <div className="p-5 text-center">
            <h3 className="fw-bold">EXPLORE ONE OF THE WORLD BEST TOURIST ATTRACTION, PARIS, FRANCE</h3>
            <p className="text-danger"><i>EXPERIENCES 8 DAYS EXCITING TRIP.</i></p>
            <img src={parisnight} className="w-100 m-2" alt="" />
            <h3 className="fw-bold mb-5">EXPERIENCE FANCY NIGHT LIFE AT PARIS</h3>
            <img src={parisopera} className="w-100 m-2" alt="" />
            <h3 className="fw-bold">PARIS OPERA</h3>
            <p className="text-danger mb-5"><i>NOTRE DAME DE PARIS</i></p>
            <h3 className="border-bottom border-info"><i>We are a passionate team with the vision of delivering <br />
                the best &amp; exiting experience for customers</i></h3>
        </div>
    );
};

export default HomeExtraTwo;