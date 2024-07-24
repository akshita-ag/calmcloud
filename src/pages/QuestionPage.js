import React, { useState } from 'react';
import './QuestionPage.css';

function QuestionPage() {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    alert('Answer submitted!');
    setAnswer('');
  };

  return (
    <div className="question-page">
      <h2>How are you feeling?</h2>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuestionPage;
