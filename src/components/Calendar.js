import React, { useState, useEffect } from 'react';
import './Calendar.css';

const moodColors = {
  happy: 'yellow',
  sad: 'lightblue',
  anxious: 'orange',
  neutral: 'bisque',
  angry: 'lightcoral',
};

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedMood, setSelectedMood] = useState('neutral');

  useEffect(() => {
    console.log("hello")
    generateCalendar();
  }, [currentMonth, currentYear]);

  const changeMonth = (delta) => {
    setCurrentMonth((prev) => {
      const newMonth = prev + delta;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  const generateMonthOptions = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames.map((month, index) => (
      <option value={index} key={index}>{month}</option>
    ));
  };

  const generateYearOptions = () => {
    const years = [];
    for (let year = 2000; year <= new Date().getFullYear(); year++) {
      years.push(year);
    }
    return years.map((year) => (
      <option value={year} key={year}>{year}</option>
    ));
  };

  const generateCalendar = () => {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
    // Fill initial empty slots
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      calendar.appendChild(emptyCell);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
      dayElement.onclick = function() {
        dayElement.style.backgroundColor = moodColors[selectedMood];
      };
      calendar.appendChild(dayElement);
    }
  };

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>&#9664;</button>
        <select
          id="month"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
        >
          {generateMonthOptions()}
        </select>
        <select
          id="year"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
        >
          {generateYearOptions()}
        </select>
        <button onClick={() => changeMonth(1)}>&#9654;</button>
      </div>
      <div className="calendar-days">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar" id="calendar">
        {/* Calendar dates will be dynamically added here */}
      </div>
      <div className="mood-selector">
        <label htmlFor="calendarMood">Select Mood:</label>
        <select
          id="calendarMood"
          value={selectedMood}
          onChange={(e) => {console.log(e.target.value); setSelectedMood(e.target.value); e.target.style.backgroundColor= moodColors[e.target.value]}}
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="neutral">Neutral</option>
          <option value="angry">Angry</option>
        </select>
      </div>
    </div>
  );
}
 
export default Calendar;
