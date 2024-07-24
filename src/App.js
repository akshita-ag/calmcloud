import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import Helpline from './pages/Helpline';
import Profile from './components/ProfileIcon';
import Navbar from './components/Navbar';
import QuestionPage from './pages/QuestionPage';
import QOTD from './pages/QOTD.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/recommendation" element={<Recommendation/>} />
          <Route path="/helpline" element={<Helpline/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/question" element={<QuestionPage/>} />
          <Route path="/quote" element={<QOTD/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
