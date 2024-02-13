// HomeIntro.jsx

import React from 'react';
import './HomeIntro.css';
import brain from '../Assets/brain.jpeg';
import Mentallady from '../Assets/Mentallady.jpg'; // Import the Mentallady image
import brainlady from '../Assets/brainlady.png'; 


const HomeIntro = () => {
  return (
    <div className='HomeIntro'>
      <div className='P1'>
        <h1>Empowering Minds, Elevating Lives</h1>
        <p>At KinoBrain Mental Health Consultancy, 
          we are dedicated to fostering mental well-being and happiness. 
          Our mission is to provide personalized and compassionate support to help individuals
           lead healthier and more fulfilling lives.</p>
      </div>
      <img src={brain} alt="Brain" className='img' />

      {/* adding second image and text for home page  */}
      <div className='P2'>
        <h3>Who we are?</h3>
        <h1>Mental health is a human right, not a privilege.</h1>
        <p> At KinoBrain Mental Health Consultancy, 
          we firmly believe that mental health is a fundamental human right, 
          not a privilege. Our commitment is rooted in the understanding that 
          everyone deserves access to mental well-being and happiness. With a 
          passionate dedication to empowering minds through mindful and physical techniques.Together, 
          let's foster a world where mental well-being is a right upheld for every individual</p>
          <img src={Mentallady} alt="Mentallady" className='img2' />
          <img src={brainlady} alt="brainlady" className='img3' />



      </div>

    </div>
  );
}

export default HomeIntro;


