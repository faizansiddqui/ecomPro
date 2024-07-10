import React from "react";
import './Hero.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// Replace with your image imports

import amg1 from '../Assests/amg-1.jpg';
import amg2 from '../Assests/amg-2.jpg';
import amg3 from '../Assests/amg-3.jpg';
import amg4 from '../Assests/amg-4.jpg';
import amg5 from '../Assests/amg-5.jpg';

// import images for hero products
import weddingCar from '../Assests/tharImages/weddingCar.jpg';
import hotelImg5 from '../Assests/hotelRoomImages/roomImage.jpg';
import taxiImages from '../Assests/tharImages/taxiImages1.jpg'

const slideImages = [
    { url: amg1 },
    { url: amg2 },
    { url: amg3 },
    { url: amg4 },
    { url: amg5 },
];

const HeroProduct = [
    
    { url: weddingCar, text: "Elegant Wedding Cars" },
    { url: hotelImg5, text: "Luxurious Hotel Rooms" },
    { url: taxiImages, text: "Book Fast Taxi And Secure" },
];

const buttonStyle = {
    width: "60px",
    height: "60px",
    background: 'none',
    border: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: '#555'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}> <MdArrowBackIosNew /> </button>,
    nextArrow: <button style={{ ...buttonStyle }}> <MdArrowForwardIos /> </button>,
    indicators: false,
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '240px',
    cursor: 'pointer',
    position: 'relative', // Ensure text positioning relative to image
};





export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-top">
                <div className="slide-container">
                    <Slide
                        {...properties}
                        autoplay={true}
                        duration={3000}
                        transitionDuration={700}
                        arrows={true}
                        pauseOnHover={true}
                    >
                        {slideImages.map((slideImage, index) => (
                            <div key={index} className="slide-item" style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>

            <div className="hero-bottom">
                {HeroProduct.map((item, i) => (
                    <div key={i} className="hero-product">
                        <img src={item.url} />
                    <div className="textOverlay">{item.text}</div>
                    </div>
                
                ))}
            </div>
        </div>
    );
};
