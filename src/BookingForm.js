// BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [eventType, setEventType] = useState('');
  const [agreeToCancellationPolicy, setAgreeToCancellationPolicy] = useState(false);

  // State variable for available booking times
  const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  // Handler functions for updating state
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBookingDateChange = (e) => setBookingDate(e.target.value);
  const handleNumberOfPeopleChange = (e) => setNumberOfPeople(e.target.value);
  const handleEventTypeChange = (e) => setEventType(e.target.value);
  const handleAgreeToCancellationPolicyChange = (e) => setAgreeToCancellationPolicy(e.target.checked);

  // Validate form fields
  const isFormValid = () => {
    return name && phone && email && bookingDate && numberOfPeople && eventType && agreeToCancellationPolicy;
  };

  return (
    <form id="reservation-form">
      <h1>Reservations</h1>
      <div className="reservation-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
      </div>
      <div className="reservation-form">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />
      </div>
      <div className="reservation-form">
        <label htmlFor="email_address">Email Address:</label>
        <input type="email" id="email_address" name="email_address" value={email} onChange={handleEmailChange} required />
      </div>
      <div className="reservation-form">
        <label htmlFor="booking_date">Date of Booking:</label>
        <input type="date" id="booking_date" name="booking_date" value={bookingDate} onChange={handleBookingDateChange} required />
      </div>
      <div className="reservation-form">
        <label htmlFor="people">Number of People:</label>
        <input type="number" id="people" min="1" max="8" name="people" value={numberOfPeople} onChange={handleNumberOfPeopleChange} required />
      </div>
      <div className="reservation-form">
        <label htmlFor="booking_time">Booking Time:</label>
        <select id="booking_time" name="booking_time" required>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="reservation-form">
        <label htmlFor="event_type">Event Type:</label>
        <select id="event_type" name="event_type" value={eventType} onChange={handleEventTypeChange} required>
          <option value="">Select an option</option>
          <option value="Dinner">Dinner</option>
          <option value="Celebration">Celebration</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
        </select>
      </div>
      <div className="reservation-form">
        <label>
          <input type="checkbox" id="agree" name="agree" checked={agreeToCancellationPolicy} onChange={handleAgreeToCancellationPolicyChange} required /> 
          I agree to the cancellation policy
        </label>
      </div>
      <button type="submit" disabled={!isFormValid()}>Book Now</button>
    </form>
  );
}

export default BookingForm;