import React from 'react';
import './frontpage.css';

import SearchBar from '../components/searchbar/SearchBar'
import Featured from '../components/featured/Featured';
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties';
import Blogs from '../components/blogs/Blogs';
import Testimonial from '../components/testimonial/Testimonial';
// import ReferralPage from '../components/referralPage/ReferralPage';
// import ReviewPage from '../components/reviewPage/ReviewPage';


const FrontPage = () => {
  return (
    <>
      <div className="front-page-container">
        <div className="content-container">
          <div className="title">
            <h1><strong>Incredible last-minute<br/> hotel deals</strong></h1>
          </div>
          <div className="description">
            <p><strong>Save time and money by booking tonight and beyond.</strong></p>
          </div>
          <SearchBar />

          <div className="info-link">
            <a href="/extenuating-circumstances">
              We encourage all travelers to read this update on how COVID-19 may affect travel and our cancellation policy.
              <span>Learn more.</span>
            </a>
          </div>
        </div>
        <div className="hotel-link">
          <a href="/hotel/taj" target="_blank">
            Fabulous, or Free
            Hassle free stay, else we pay
            Know more
            Quick Hotel Search

            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 17">
                <path fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1.551 15.432l3.735-6.91L1.55 1.242"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <h2 className='quick-hotel-title'>Quick Hotel Search</h2>
      <Featured />
      <h2 className='quick-hotel-title'>Top Hotels</h2>
      <FeaturedProperties/>
      <Blogs/>
      <Testimonial/>
      {/* <ReviewPage/>
      <ReferralPage/> */}
    </>
  );
};

export default FrontPage;
