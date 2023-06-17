import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  const discounts = [
    {
      title: 'Special Discount 1',
      description: 'Get 20% off on your next booking with code DISCOUNT20.',
    },
    {
      title: 'Special Discount 2',
      description: 'Get 30% off on your next booking with code DISCOUNT30.',
    },
    {
      title: 'Special Discount 3',
      description: 'Get 40% off on your next booking with code DISCOUNT40.',
    },
    {
      title: 'Special Discount 4',
      description: 'Get 50% off on your next booking with code DISCOUNT50.',
    },
    {
      title: 'Special Discount 5',
      description: 'Get 60% off on your next booking with code DISCOUNT60.',
    },
    {
      title: 'Special Discount 6',
      description: 'Get 70% off on your next booking with code DISCOUNT70.',
    },
  ];

  return (
    <div>
      <div className="container py-5">
        <h2 className="mb-4 py-5 text-center">Discount Section</h2>
        <div className="row">
          {discounts.map((discount, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{discount.title}</h5>
                  <p className="card-text">{discount.description}</p>
                  <button className="ctn ctn-discont">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
