// src/Confirmation.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';
import Head from '../Header';
import Footer from '../Footer';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  if (!bookingDetails) {
    navigate('/');
    return null;
  }

  return (
    <>
    <Head/>
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p><strong>Date</strong>    {bookingDetails.date}</p>
      <p><strong>Time</strong> {bookingDetails.time}</p>
      <p><strong>Number of Guests</strong> {bookingDetails.guests}</p>
      <p><strong>Occasion</strong> {bookingDetails.occasion}</p>
      <p><strong>Name</strong> {bookingDetails.name}</p>
      <p><strong>Email</strong> {bookingDetails.email}</p>
      <p><strong>Special Requests</strong> {bookingDetails.specialRequests}</p>
      <button onClick={() => navigate('/Reservation')}>Make Another Booking</button>
    </div>
    <Footer/>
    </>
  );
};

export default Confirmation;
