import React from 'react';
import './frontpage.css';

import SearchBar from '../components/searchbar/SearchBar'
import Featured from '../components/featured/Featured';
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties';
import Blogs from '../components/blogs/Blogs';
import Testimonial from '../components/testimonial/Testimonial';
import TravelBlog from '../components/blogs/TravelBlog';
// import SpecialOffers from './SpecialOffers';
// import ReviewPage from '../components/reviewPage/ReviewPage';


const FrontPage = () => {
  return (
    <>
        <div className="hero-container">
          <div>
            <h1>Unforgettable Last-Minute <br /> Hotel Getaways</h1>
          </div>
          <div>
            <SearchBar />
          </div>
          <div>
            <p className="description">Discover and book your perfect hotel with ease. Enjoy a seamless experience and unbeatable rates on our hotel booking website.</p>
          </div>
        </div>
        <h2 className='quick-hotel-title'>Quick Hotel Search</h2>
        <Featured />
        <h2 className='quick-hotel-title'>Top Hotels</h2>
        <FeaturedProperties />
        <Blogs />
        <Testimonial />
        <TravelBlog />
      </>
      );
};

      export default FrontPage;
