import React from 'react';
import './Recommendation.css';

function Recommendation() {
  return (
    <div className="recommendation">
      <h1 className="question">What do you want to feel?</h1>
      <div className="emotions-container">
        <button className="emotion-button">Happy</button>
        <button className="emotion-button">Calm</button>
        <button className="emotion-button">Inspired</button>
        <button className="emotion-button">Relaxed</button>
        <button className="emotion-button">Energized</button>
        <button className="emotion-button">Motivated</button>
        <button className="emotion-button">Loved</button>
        <button className="emotion-button">Sad</button>
        
      </div>
      <div className="quote-container">
        <div className="quote-box">
          "The best way to predict your future is to create it." - Abraham Lincoln
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
