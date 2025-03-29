import React, { Suspense } from 'react';
import { details } from './About'; // Import details array from About
import Services from './Services';
import '../CSS/Home.css'; // Import CSS file instead of styled-components
import Contact from './Contact';
import Projects from './Projects';
import Testimonials from './Testimonials';

const About = React.lazy(() => import('./About')); // Lazy load the About component

// Filter only the first 4 slides
const filteredDetails = details.slice(0, 4);

const Home = () => {
  const scrollToComponents = () => {
    const componentsSection = document.getElementById('components');
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="heading1-container" aria-label="Welcome to V-knon">
            Welcome To
          </div>
          <div className="heading2-container">Digital Sarthi</div>
          <p className="sub-text">Sarthi of Your Digital Success...</p>
          <button className="home-button" onClick={scrollToComponents}>Get Started</button>
        </div>
      </div>

      <div id="components">
        <Suspense fallback={<div>Loading... Please wait...</div>}>
          <About slides={filteredDetails} />
        </Suspense>
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
