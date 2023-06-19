import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  const handleClose = () => {
    navigate(`/hotel/${id}`); // Replace 'hotel/:id' with your actual route for the HotelDetailsPage
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content booking-form">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="ctn ctn-sm" type="submit">Proceed to Continue</button>
          <button className="close-btn" onClick={handleClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
