import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Navigation
                </h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">SearchHotels</a></li>
                  <li><a href="#">SpecialOffers</a></li>
                  <li><a href="#">MyBookings</a></li>
                  <li><a href="#">ContactUs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Reservation
                </h3>
                <p className="footer_text">+10 367 267 2678 <br />
                  reservation@mastroom.com</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">
                  address
                </h3>
                <p className="footer_text"> H-Block, Lohia Road ,<br />
                  Sector -63, Noida, Uttar Pradesh <br /> 201301, IN</p>
                <a href="#" className="line-button">Get Direction</a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Newsletter
                </h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit">Sign Up</button>
                </form>
                <p className="newsletter_text">Subscribe newsletter to get updates</p>
              </div>
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram fa-2x" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border" />
          <div className="row">
            <div className="col-xl-12 col-md-7 col-lg-9">
              <p className="copy_right">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | Designed and developed <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="/" target="_blank">DigiiDunia</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p></div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
