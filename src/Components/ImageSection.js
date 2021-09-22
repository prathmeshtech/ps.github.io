import React from 'react';
import psimage from '../img/psimage.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={psimage} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Prathmesh Singh</span></h4>
                <p className="about-text">
                    I am a MERN Stack Developer and a Tech Enthusiast. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name: <span>Prathmesh Singh</span></p>
                        <p></p>
                        <p>Age:<span>21</span></p>
                        <p>Nationality: <span>Indian</span></p>
                        <p>Languages: <span>English, Hindi</span></p>
                        <p>Address:<span> Pen, Maharashtra, India</span></p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
