// ContactForm.js
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    // Reset form data
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="formbox">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className="form-group">
          <label htmlFor="email">Personal Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">How Can I Help You?</label>
          <textarea
            required
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        {submitted && <div className="submitted-message">Thank you for contacting us!</div>}
      </form>
    </div>
  );
};

export default ContactForm;
