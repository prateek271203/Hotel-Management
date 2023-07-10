import React from 'react';
import './HotelDetailsPage.css'; 

const HotelDetailsPage = () => {
  return (
    <div className="hotel-details">
      <div className="hotel-image">
        <img src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hotel" />
      </div>
      <div className="hotel-info">
        <h2 className="hotel-name">Hotel Name</h2>
        <p className="hotel-location">Location, Country</p>
        <div className="hotel-rating">
          <span className="rating">4.5</span>
          <span className="out-of">/5</span>
        </div>
        <p className="hotel-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ante ac tellus semper sagittis.
          Phasellus sit amet eleifend neque, at consequat nibh. Vivamus ultrices sapien ut nisi laoreet,
          eget pharetra dui cursus. Aenean facilisis nunc augue, nec congue est tristique a.
        </p>
        <div className="amenities">
          <h3>Amenities</h3>
          <ul>
            <li>Free Wi-Fi</li>
            <li>Swimming Pool</li>
            <li>Gym</li>
            <li>Restaurant</li>
            <li>Parking</li>
          </ul>
        </div>
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p>Price: $100 per night</p>
          <button className="ctn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
