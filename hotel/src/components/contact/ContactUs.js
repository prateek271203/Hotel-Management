import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div>
      <div>
        {/* Page Header Start */}
        <div className="contact-header container-fluid"></div>
        {/* Page Header End */}
        <section className="contact py-4 bg-white" id="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
            </div>
            <div className="contact-content row">
              <div className="form col-lg-6 col-md-12">
                <form action="" method="" className="form-contact">
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="Full Name"
                    name="full_name"
                  />
                  <input
                    type="email"
                    className="form-control1"
                    placeholder="E-mail"
                    name="email"
                  />
                  <textarea
                    rows="5"
                    className="form-control1"
                    placeholder="Message"
                    name="message"
                    defaultValue=""
                  ></textarea>
                  <button type="submit" className="ctn sm-ctn">
                    Send
                  </button>
                </form>
              </div>
              <div className="map col-lg-6 col-md-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339855874!2d-0.24168085317947707!3d51.528558242069835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2snp!4v1639724107420!5m2!1sen!2snp"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                >
                </iframe>
                
                <div className="contact-info">
                  <div className="">
                    <span className="icon">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </span>
                    <p className="icon-text text">Pune, Maharashtra</p>
                  </div>
                  <div className="">
                    <span className="icon">
                      <i className="fas fa-phone fa-2x"></i>
                    </span>
                    <p className="icon-text text">+44(20) 6475 5766</p>
                  </div>
                  <div className="">
                    <span className="icon">
                      <i className="fas fa-envelope fa-2x"></i>
                    </span>
                    <p className="icon-text text">masthotel@gmail.com</p>
                  </div>
                </div>
                
              </div>
             
            </div>

          </div>
        </section>
      </div>
     
    </div>
  );
};

export default ContactUs;
