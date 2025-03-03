import React, { useState, useEffect, useMemo } from 'react';
import { FaUsers, FaLightbulb, FaCogs, FaTrophy } from 'react-icons/fa';
import '../CSS/About.css';

// Default Details
export const details = [
  { icon: <FaUsers />, color: '#ff6b6b', title: 'Who We Are', text: 'We are a team of skilled marketers and creative professionals dedicated to helping businesses grow with innovative strategies and fresh ideas.' },
 { icon: <FaLightbulb />, color: '#f79d65', title: 'What Makes Us Different', text: 'We combine data-driven insights, creative marketing, and a customer-first approach to provide customized solutions that truly make a difference.' },
  { icon: <FaCogs />, color: '#6a89cc', title: 'Our Process', text: 'Our structured process includes in-depth business analysis, strategic planning, creative execution, and performance optimization to ensure success.' },
  { icon: <FaTrophy />, color: '#9b59b6', title: 'Our Success Stories', text: 'Our strategies have helped businesses increase their sales, boost engagement, and build strong brand identities, leading to measurable success.' }
];

const About = ({ slides = [] }) => {
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = useMemo(() => [
    { number: 6, text: 'Years of Experience' },
    { number: 10, text: 'Clients' },
    { number: 15, text: 'Projects Completed' },
  ], []);

  // Ensure slides always have 8 items
  const defaultSlides = useMemo(() => {
    return slides.length >= 8 ? slides.slice(0, 8) : [...slides, ...details.slice(slides.length, 8)];
  }, [slides]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const updateCount = () => {
        start += 1;
        setCounts((prevCounts) => {
          const updatedCounts = [...prevCounts];
          updatedCounts[index] = start;
          return updatedCounts;
        });

        if (start < end) {
          requestAnimationFrame(updateCount);
        }
      };
      updateCount();
    });
  }, [stats]);

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
