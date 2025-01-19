import React, { Suspense } from 'react';
import ServicesPage from './ServicePage'; // Import ServicesPage component
import { details } from './About'; // Import details array from About
import { 
  HomeContainer, 
  HomeContent, 
  Heading1Container, 
  Heading2Container, 
  HomeButton, 
  SubText 
} from '../CSS/HomeStyles'; // Import styled components

const About = React.lazy(() => import('./About')); // Lazy load the About component

// Filter only the first 4 slides
const filteredDetails = details.slice(0, 4);

console.log('Filtered Details:', filteredDetails); // Log to ensure only 4 slides are passed

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <Heading1Container aria-label="Welcome to V-knon">Welcome To</Heading1Container>
          <Heading2Container>V-knon Marketing</Heading2Container>
          <SubText>Empowering Your Digital Presence</SubText>
          <HomeButton>Get Started</HomeButton>
        </HomeContent>
      </HomeContainer>

      <Suspense fallback={<div>Loading... Please wait...</div>}>
        {/* Pass filtered slides */}
        <About slides={filteredDetails} />
      </Suspense>

      <ServicesPage />
    </>
  );
};

export default Home;
