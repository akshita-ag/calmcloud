import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="question-of-the-day">
        <Link to="/question" className="question-button">Question of the Day</Link>
      </div>
      <div className="buttons-container">
        <button className="category-button">Stress</button>
        <button className="category-button">BE</button>
        <button className="category-button">MD</button>
        <button className="category-button">ME</button>
        <button className="category-button">Dancing</button>
        <button className="category-button">Loving</button>
        <button className="category-button">Caring</button>
        <button className="category-button">Boundaries</button>
      </div>
      <Calendar />
    </div>
  );
}

export default Home;
