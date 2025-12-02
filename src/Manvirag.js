// Home.js
import React from 'react';
import designImage from './assets/design.png'

const Home = () => {
  // Separate videos and text quotes
  const videos = [
    {
      src: '/markdown/looser_winner.mp4',
      title: ''
    },
    {
      src: '/markdown/goalltheway.mp4',
      title: ''
    },
    // Add more videos here:
    // {
    //   src: '/path/to/your/video.mp4',
    //   title: 'Video Title'
    // },
  ];

  const quotes = [
    "Be humble. Be fearless. Be yourself. Remember, everyone regardless of their greatness, beauty, arrogance, judgement etc. will eventually face mortality.",
    "If you are going through hell, why would you stop in hell?. Its all about mindset.",
    "Believe in instinct, keep betting on yourself and move out of your comfort zone. if you don't believe in yourself, why would someone else believe in you?",
    "Life's unpredictable. Don't take it too seriously, and try to keep a balanced outlook — not too optimistic, not pessimistic. Think only on controllable things.",
    "On one hand, you're wasting time scrolling and watching aimlessly. On the other, you claim you're too busy and don't have time. It's one thing to lie to others — but never cheat to yourself.",
    "I am constantly in war with myself not with others. I'm trying to be better than I was yesterday."
  ];

  return (
    <div className='home'>
      <img 
        src={designImage} 
        alt="icon" 
        style={{ 
          maxWidth: '4rem',
          marginTop: '5%',
        }} 
      />
      
      <div className="motivation-section">
        <div className="motivation-layout">
          {/* Left side - Videos */}
          <div className="motivation-videos-column">
            {videos.map((video, index) => (
              <div key={index} className="motivation-video-card">
                <div className="motivation-video-wrapper">
                  <video
                    className="motivation-video"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {video.title && (
                    <p className="motivation-video-title">{video.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Quotes */}
          <div className="motivation-quotes-column">
            {quotes.map((quote, index) => (
              <div key={index} className="motivation-card">
                <p className="motivation-text">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

