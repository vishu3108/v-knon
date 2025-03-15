import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '../CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    mobile: '',
    businessName: '',
    businessType: '',
    preferences: [],
  });
  
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        preferences: checked
          ? [...prevData.preferences, value]
          : prevData.preferences.filter((pref) => pref !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3x3ttrv",    // Replace with your EmailJS service ID
        "template_eqt9p2l",   // Replace with your EmailJS template ID
        formRef.current,
        "2cCZ1z04tFrzOaDi-"   // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent!');
        },
        (error) => {
          console.log(error.text);
          alert('Please Fill All Details ');
        }
      );
  };

  return (
    <motion.section
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-wrapper">
        {/* Left Side - Image */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image will be set via CSS */}
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="form-heading">Connect With Us !</h2>
          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Row 1: Name and City */}
            <div className="form-row">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="text"
                name="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            {/* Row 2: Email and Mobile */}
            <div className="form-row">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            {/* Row 3: Business Name and Business Type */}
            <div className="form-row">
              <motion.input
                type="text"
                name="businessName"
                placeholder="Your Business Name"
                value={formData.businessName}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="text"
                name="businessType"
                placeholder="Your Business Type"
                value={formData.businessType}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            {/* Checkbox Options */}
            <div className="checkbox-group">
              {[
                "Digital Marketing",
                "Social media",
                "Business Strategy",
                "Whatsapp",
                "YouTube Analysis",
                "Google Maps"
              ].map((preference) => (
                <div className="checkbox-item" key={preference}>
                  <input
                    type="checkbox"
                    name="preferences"
                    value={preference}
                    onChange={handleChange}
                    checked={formData.preferences.includes(preference)}
                  />
                  <label>{preference}</label>
                </div>
              ))}
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
