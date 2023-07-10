import React from 'react';
import { Link } from 'react-router-dom';
import './TravelBlog.css';

const TravelBlog = () => {
  return (
    <div className="travel-blog-container">
      <h2>Travel Blog</h2>
      <div className="blog-cards">
        <Link to="/MumbaiBlog" className="blog-card">
          <img src="https://t-news.b-cdn.net/media/m0uf2ndd/farming.png?width=1280&upscale=true" alt="Blog 1" />
          <div className="card-overlay">
            <h3>Explore Mumbai</h3>
            <h4>City of Dreams</h4>
            <h5>Mumbai Chronicles: Exploring the Dynamic City of Dreams</h5>
            <p>January 29, 2023</p>
          </div>
        </Link>
        <Link to="/PuneTravelBlog" className="blog-card">
          <img src="https://t-news.b-cdn.net/media/m0uf2ndd/farming.png?width=1280&upscale=true" alt="Blog 2" />
          <div className="card-overlay">
            <h3>Discover Pune</h3>
            <h4>Cultural Hub</h4>
            <h5>Pune Unveiled: Exploring the Rich Cultural Heritage of the City</h5>
            <p>February 15, 2023</p>
          </div>
        </Link>
        {/* Add more blog cards here */}
      </div>
    </div>
  );
};

export default TravelBlog;
