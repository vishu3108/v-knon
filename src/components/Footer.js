import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 [Your Name]. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
