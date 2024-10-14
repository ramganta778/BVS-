// src/components/Feedback.js
import React, { useState } from 'react';
import TopNav from './TopNav'; // Import the TopNav component
import logo from './Images/Logo.png'; // Update with the actual path to your logo image


function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can add your form submission logic here
    console.log('Feedback submitted:', { name, email, message });
    
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (

    <div id="feedback">
    <div className="feedback-container">
         {/* Logo at the top */}
      <div className="logo-container">
        <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
      </div>
      <TopNav /> {/* Include the TopNav component */}
      <h2>Feedback</h2>
      {submitted && <p className="success-message">Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Feedback:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
    
    </div>
  );
}

export default Feedback;
