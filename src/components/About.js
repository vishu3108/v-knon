import React, { useState, useEffect, useMemo } from 'react';
import { FaUsers, FaBullseye, FaStar, FaGlobe } from 'react-icons/fa';
import '../CSS/About.css';

// Default Details
export const details = [
  { icon: <FaUsers />, color: '#ff6b6b', title: 'Who We Are', text: 'A team of experienced marketers and creatives...' },
  { icon: <FaBullseye />, color: '#5dd39e', title: 'Our Mission', text: 'To empower businesses with tools and strategies...' },
  { icon: <FaStar />, color: '#ffd93d', title: 'Why Choose Us', text: 'With over a decade of expertise...' },
  { icon: <FaGlobe />, color: '#4c84ff', title: 'Global Reach', text: 'We connect businesses with audiences worldwide...' }
  
];

const About = ({ slides = [] }) => {
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = useMemo(
    () => [
      { number: 6, text: 'Years of Experience' },
      { number: 10, text: 'Clients' },
      { number: 15, text: 'Projects Completed' },
    ],
    []
  );

  // Ensure slides always have 8 items
  const defaultSlides = useMemo(() => {
    if (slides.length >= 8) {
      return slides.slice(0, 8); // Use the first 8 slides if more than 8
    }
    return [...slides, ...details.slice(slides.length, 8)]; // Fill missing slides from `details`
  }, [slides]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const interval = setInterval(() => {
        start += 1;
        setCounts((prevCounts) => {
          const updatedCounts = [...prevCounts];
          updatedCounts[index] = start;
          return updatedCounts;
        });

        if (start >= end) {
          clearInterval(interval);
        }
      }, 50);
    });
  }, [stats]);

  console.log('Received slides in About.js:', slides); // Debugging
  console.log('Default slides being used:', defaultSlides); // Debugging

  return (
    <section className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        We are a leading digital agency, committed to transforming businesses into powerful brands. With a team of
        passionate professionals, we deliver exceptional results through innovation and creativity.
      </p>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2 className="stat-number">{counts[index]}</h2>
            <p className="stat-text">{stat.text}</p>
          </div>
        ))}
      </div>

      <div className="details-container">
        {defaultSlides.map((detail, index) => (
          <div key={index} className="detail-card">
            <div className="detail-icon" style={{ color: detail.color }}>
              {detail.icon}
            </div>
            <h3 className="detail-title">{detail.title}</h3>
            <p className="detail-text">{detail.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;
