import React, { useState } from 'react';

const HotelsPage = () => {
  const [city, setCity] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    // Simulate fetching hotels data for the selected city
    // Replace this with your actual API call to fetch hotels
    const mockHotels = [
      { id: 1, name: 'Hotel A' },
      { id: 2, name: 'Hotel B' },
      { id: 3, name: 'Hotel C' },
    ];
    setHotels(mockHotels);
  };

  return (
    <div>
      <h1>Hotels Page</h1>
      <div>
        <label htmlFor="cityInput">Enter a city:</label>
        <input
          type="text"
          id="cityInput"
          value={city}
          onChange={handleCityChange}
          placeholder="City name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelsPage;
