import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-main">
      <div className="navbar-container">
        <div className="navbar-logo">MAST<span>Room</span></div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/SearchHotels">Search Hotels</Link>
          <Link to="/SpecialOffers">Special Offers</Link>
          <Link to="/MyBookings">My Bookings</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
