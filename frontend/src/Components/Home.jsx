// Home.js
import React from 'react';

const homeContainerStyle = {
  textAlign: 'center',
  color: '#2ecc71',
  padding: '50px',
};

const titleStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '20px',
  lineHeight: '1.8', // Increased line height for better readability
  marginBottom: '15px', // Added margin at the bottom for separation
};

const  Home = () => {
  return (
    <div style={homeContainerStyle}>
      <h2 style={titleStyle}>Welcome to Mind Wellness</h2>
      <p style={descriptionStyle}>
        At Mind Wellness, we are dedicated to providing exceptional mental health services
        to support your well-being. Explore our range of services, tailored to help you on
        your journey towards better mental health and overall happiness.
      </p>
      <p style={descriptionStyle}>
        Our experienced team of professionals is committed to assisting you in achieving
        mental wellness through evidence-based practices and personalized care.
      </p>
      <p style={descriptionStyle}>
        Take the first step towards a healthier mind. Your well-being is our priority.
      </p>
    </div>
  );
}

export default Home;


