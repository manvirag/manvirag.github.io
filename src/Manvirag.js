// Home.js
import React from 'react';
import designImage from './assets/design.png'

const Home = () => {
  return (
    <div className='home'>
      <img 
        src={designImage} 
        alt="icon" 
        style={{ 
          maxWidth: '4rem', // Set a max width similar to h2 size
          marginTop: '5%', // Add top margin
        }} 
      />
      <h2>Be humble. Be fearless. Be yourself. </h2>
      <h2> Remember, everyone regardless of their greatness, beauty, arrogance, judgement etc. will eventually face mortality.</h2>
    </div>
  );
};

export default Home;

