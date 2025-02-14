import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', preferences: [] });

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
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
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
          <h2 className="form-heading">Contact Us</h2>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
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
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email (Optional)"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.05 }}
            />

            {/* Checkbox Options */}
            <div className="checkbox-group">
              {['Call', 'Email', 'WhatsApp', 'SMS', 'Telegram'].map((preference) => (
                <div className="checkbox-item" key={preference}>
                  <input
                    type="checkbox"
                    name="preferences"
                    value={preference}
                    onChange={handleChange}
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
