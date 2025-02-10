import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Navbar Container with a background image
const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-image: url('/images/home-bkg3.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent dark overlay */
  padding: 1rem 2rem;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${(props) => (props.scroll ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none')};
  backdrop-filter: blur(5px); /* Optional: adds blur effect */
  display: flex; /* Flexbox for alignment */
  justify-content: space-between; /* Separate left and right sections */
  align-items: center; /* Vertically align items */
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: #f39c12;
  }
`;

// Right-side buttons container
const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 5rem;
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 15px; /* Rounded border */
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  color: white;
  text-align: center;

  &:first-child {
    background-color: transparent;
    border: 2px solid #f39c12;
  }

  &:first-child:hover {
    background-color: #f39c12;
    color: black;
  }

  &:last-child {
    background-color: #f39c12;
    color: black;
  }

  &:last-child:hover {
    background-color: #d35400;
    color: white;
  }
`;

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); // Changes style when scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavBarContainer scroll={scroll}>
      {/* Left Navigation Links */}
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/services">Services</NavLink> {/* New Link for Services */}
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>

      {/* Right-side Buttons */}
      <ActionButtons>
        <Button to="/login">Login</Button>
        <Button to="/free-trial">Free Trial</Button>
      </ActionButtons>
    </NavBarContainer>
  );
};

export default Navbar;
