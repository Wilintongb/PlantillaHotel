import React from 'react';
import hotelImage from '../path/to/hotel.jpg';

const About = () => {
    return (
        <div className="about">
            <h2>About</h2>
            <img src={hotelImage} alt="Hotel" className="about-image" />
            <p>
                Welcome to our hotel! We offer the best services and accommodations to make your stay unforgettable. 
                Our staff is dedicated to providing you with a pleasant experience, from check-in to check-out.
            </p>
            <p>
                Enjoy our amenities, including free WiFi, a swimming pool, and a relaxing jacuzzi. 
                Whether you're here for business or leisure, we have something for everyone.
            </p>
            <p>
                Located in the heart of the city, our hotel is just minutes away from popular attractions and local hotspots.
                We pride ourselves on creating a welcoming environment for all our guests.
            </p>
        </div>
    );
};

export default About;