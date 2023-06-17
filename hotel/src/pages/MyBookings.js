import React from 'react';

const MyBookings = () => {
  const bookings = [
    {
      id: 1,
      hotel: 'Example Hotel 1',
      checkInDate: '2023-06-20',
      checkOutDate: '2023-06-25',
    },
    {
      id: 2,
      hotel: 'Example Hotel 2',
      checkInDate: '2023-07-10',
      checkOutDate: '2023-07-15',
    },
    // Add more bookings as needed
  ];

  return (
    <div>
      <div className='containar py-5'>
      <h2 className='py-5 text-center'>My Bookings</h2>
      {bookings.length > 0 ? (
        <table className="table tabel-mybooking">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hotel</th>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.hotel}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
    </div>
  );
};

export default MyBookings;
