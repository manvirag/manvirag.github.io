// Home.js
import React from 'react';
import designImage from './assets/design.png'

const Home = () => {
  return (
    <div>
      <img 
        src={designImage} 
        alt="icon" 
        style={{ 
          maxWidth: '4rem', // Set a max width similar to h2 size
          marginTop: '5%', // Add top margin
        }} 
      />
    </div>
  );
};

export default Home;

