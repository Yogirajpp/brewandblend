import React from 'react';
import './Home.css';
import coffeeImage from '../../images/coffee/coffee-home.png'; // Import the image

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="left">
          <h1 className="title">New Taste Coffee with Cream</h1>
          <p className="subtitle">Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <button className="cta-button">Read More</button>
        </div>
        <div className="right">
          <img src={coffeeImage} alt="Coffee with Cream" className="coffee-image" /> {/* Use the imported image */}
        </div>
         {/* Curved lines */}
        {/* <div className="rectangle"></div> Rectangle shape */}
      </div>
      <div className="curve"></div>
      <div className="curve2"></div>
    </section>
  );
};

export default Home;
