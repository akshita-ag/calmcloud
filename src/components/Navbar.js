import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/recommendation" className="nav-link">Recommendation</Link>
      <Link to="/helpline" className="nav-link">Helpline</Link>
      <Link to="/quote" className="quote">QOTD</Link>
      <Link to="/profile" className="profile-icon">P</Link>
    </nav>
  );
}

export default Navbar;
