import React, { useState } from "react";
import "../cssPages/Contact.css";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question about our
          services or need assistance, you can reach us here.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="company-info">
        <h2>Company Futurelabs</h2>
        <p>Frontend Development Co.</p>
        <p>No: 3 chubb road Ikot Ekpene</p>
        <p>Akwa Ibom state Nigerial</p>
        <p>Email: info@Futurelab.com</p>
        <p>Phone: (124) 81 43 18 37 90</p>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <a
          href="https://twitter.com/frontenddev"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaTwitter size={30} style={{color:"#000"}}/>
        </a>
        <a
          href="https://facebook.com/frontenddev"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaFacebook size={30} style={{color:"#000", backgroundColor:"#fff"}}/>
        </a>
        <a
          href="https://linkedin.com/company/frontenddev"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FaLinkedinIn size={30} style={{color:"#000"}}/>
        </a>
      </div>
    </div>
  );
};

export default Contact;

// export default Contact
