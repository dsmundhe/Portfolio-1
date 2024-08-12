import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f88m34e', 'template_gyetoot', e.target, 'lBggOeWVsV32N0e7D')
      .then((result) => {
          console.log(result.text);
          setSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='formbox'>
      <div className="upline">
        <div className="upline1"></div>
      </div>
      <div className="contact-form">
        <h1>Contact Me</h1>
        {submitted ? (
          <p className="submitted-message">Submitted!</p>
        ) : (
          <form onSubmit={sendEmail}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required />
            </label>
            <h1> <button type="submit">Send </button></h1>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
