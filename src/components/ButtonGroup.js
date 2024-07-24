import React from 'react';
import './ButtonGroup.css';

function ButtonGroup() {
  const buttons = ['Stress', 'BE', 'MD', 'ME', 'DANCING', 'LOVING', 'CARING', 'BOUNDARIES'];

  return (
    <div className="button-group">
      {buttons.map(button => (
        <button key={button} className="button">{button}</button>
      ))}
    </div>
  );
}

export default ButtonGroup;
