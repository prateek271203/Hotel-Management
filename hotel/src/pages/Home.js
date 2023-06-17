import React from 'react';
import HotelDetailsPage from './HotelDetailsPage';
import FrontPage from './FrontPage';

const Home = () => {
  return (
    <div>
      {/* <div className="hero-container"> */}
        <FrontPage/>
      {/* </div> */}
      <HotelDetailsPage /> 
    </div>

  );
};

export default Home;
