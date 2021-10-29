import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../images/banner/travel-slide-1.jpg'
import img2 from '../../../images/banner/travel-slide-2.jpg'
import img3 from '../../../images/banner/travel-slide-4.jpg'
import img4 from '../../../images/banner/travel-slide-5.jpg'

const Banner = () => {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid m-3"
                        src={img1}
                        alt="First slide"
                    />
                    <img
                        className="img-fluid"
                        src={img2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="img-fluid m-3"
                        src={img4}
                        alt="Second slide"
                    />
                    <img
                        className="img-fluid"
                        src={img3}
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;