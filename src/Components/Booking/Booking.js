// src/Booking.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      date,
      time,
      guests,
      occasion,
      name,
      email,
      specialRequests,
    };
    console.log('Booking Details:', bookingDetails);
    // Pass booking details as state to the confirmation page
    navigate('/confirmation', { state: bookingDetails });
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="booking-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Date
        </label>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={getTodayDate()}
            required
          />
        <label>
          Time
        </label>
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select a time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        <label>
          Number of Guests
        </label>
        <input
            type="number"
            value={guests}
            min="1"
            max="20"
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        <label>
          Occasion
        </label>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        <label>
          Name
        </label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        <label>
          Email
        </label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label>
          Special Requests
        </label>
        <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
