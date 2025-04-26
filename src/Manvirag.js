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
        
      <h2>Be humble. Be fearless. Be yourself. 
       Remember, everyone regardless of their greatness, beauty, arrogance, judgement etc. will eventually face mortality.</h2>
      <h2>If you are going through hell, why would you stop in hell?. Its all about mindset. </h2>
      <h2>Believe in instinct, keep betting on yourself and move out of your comfort zone. if you don't believe in yourself, why would someone else believe in you?</h2>
      <h2>Life’s unpredictable. Don’t take it too seriously, and try to keep a balanced outlook — not too optimistic, not pessimistic. Think only on controllable things.</h2>
      <h2>On one hand, you're wasting time scrolling and watching aimlessly. On the other, you claim you're too busy and don't have time. It's one thing to lie to others — but never cheat to yourself. </h2>
      
      

      
    </div>
  );
};

export default Home;

