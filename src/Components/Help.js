import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    help: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, help } = formData;
    const body = `Name: ${name}<br/>Email: ${email}<br/>Phone No.: ${phone}<br/>Message: ${help}`;

    window.Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'himanshimittal528@gmail.com',
      Password: 'FC171A1404C143568E17C6B5BE508E69D23C',
      To: 'himanshimittal528@gmail.com',
      From: 'himanshimittal528@gmail.com',
      Subject: 'Contact Form Submission',
      Body: body,
    })
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          help: ''
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ul className="loginul">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/bag">Shopping Bag</NavLink></li>
      </ul>

      <h1 className="heading">ZARA</h1>

      <div className="contact-box">
        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="tel"
              id="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              id="help"
              cols="40"
              rows="5"
              placeholder="How can we help you?"
              value={formData.help}
              onChange={handleChange}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
