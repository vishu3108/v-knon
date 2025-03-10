import React, { Suspense } from 'react';
import { details } from './About'; // Import details array from About
import Services from './Services';
import { 
  HomeContainer, 
  HomeContent, 
  Heading1Container, 
  Heading2Container, 
  HomeButton, 
  SubText 
} from '../CSS/HomeStyles'; // Import styled components
import Contact from './Contact';
import Projects from './Projects';
import Testimonials from './Testimonials';

const About = React.lazy(() => import('./About')); // Lazy load the About component

// Filter only the first 4 slides
const filteredDetails = details.slice(0, 4);

console.log('Filtered Details:', filteredDetails); // Log to ensure only 4 slides are passed

const Home = () => {
  const scrollToComponents = () => {
    const componentsSection = document.getElementById('components');
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HomeContainer className="home-container">
        <HomeContent className="home-content">
          <Heading1Container className="heading1-container" aria-label="Welcome to V-knon">Welcome To</Heading1Container>
          <Heading2Container className="heading2-container">V-knon Marketing</Heading2Container>
          <SubText className="sub-text">Its Your Will To Be Known By Your Customers...</SubText>
          <HomeButton className="home-button" onClick={scrollToComponents}>Get Started</HomeButton>
        </HomeContent>
      </HomeContainer>

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
