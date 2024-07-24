import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionOfTheDay.css';

function QuestionOfTheDay() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/question');
  };

  return (
    <div className="question-of-the-day">
      <button onClick={handleClick}>Question of the Day</button>
    </div>
  );
}

export default QuestionOfTheDay;
