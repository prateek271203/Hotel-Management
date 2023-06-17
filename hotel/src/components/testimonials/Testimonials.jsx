import React, { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: 'Excellent Swimming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Ayman Jensi',
      role: 'Manager',
      image: 'image/c1.jpg',
    },
    {
      id: 2,
      rating: 5,
      title: 'Excellent Swimming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Ayman Jensi',
      role: 'Manager',
      image: 'image/c2.jpg',
    },
    {
      id: 3,
      rating: 5,
      title: 'Excellent Swimming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Ayman Jensi',
      role: 'Manager',
      image: 'image/c3.jpg',
    },
  ];

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="customer top" id="testimonials">
      <div className="container">
        <div className="heading">
          <h5>TESTIMONIALS</h5>
          <h3>What customers say</h3>
        </div>

        <AutoPlaySwipeableViews
          index={activeIndex}
          onChangeIndex={handleSlideChange}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="rate">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <h3>{testimonial.title}</h3>
              <p>{testimonial.content}</p>
              <div className="admin flex">
                <div className="img">
                  <img src={testimonial.image} alt="" />
                </div>
                <div className="text">
                  <h3>{testimonial.author}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </section>
  );
};

export default Testimonials;
