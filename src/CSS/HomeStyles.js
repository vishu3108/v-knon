// HomeStyles.js
import styled, { keyframes } from 'styled-components';

// Define the animations
const typing = keyframes`
  from { width: 0; opacity: 0; }
  to { width: 100%; opacity: 1; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Define styled components
export const HomeContainer = styled.div`
  background-image: url('/images/Web_Backg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5rem;
  color: white;
  flex-wrap: wrap;
`;

export const HomeContent = styled.div`
  z-index: 10;
  padding: 2rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  animation: ${fadeIn} 1.5s ease forwards;
`;

export const Heading1Container = styled.div`
  font-size: clamp(2.4rem, 4.5vw, 5rem);
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white;
  width: 100%;
  max-width: 25ch;
  opacity: 0;
  animation: ${typing} 1.5s steps(25) 0.5s forwards, ${blink} 0.5s step-end infinite, ${scaleIn} 1.5s ease forwards;
`;

export const Heading2Container = styled.div`
  font-size: clamp(2.4rem, 4.5vw, 4.5rem);
  font-weight: bold;
  margin-top: 1rem;
  opacity: 0;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid transparent;
  background-image: linear-gradient(90deg, #ff6347, #ffb84d);
  -webkit-background-clip: text;
  color: transparent;
  animation: ${typing} 1.5s steps(25) 2.5s forwards, ${blink} 0.5s step-end infinite;
`;

export const HomeButton = styled.button`
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #ff6347;
  border: 2px solid #ff6347;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease 6.5s forwards;

  &:hover {
    background-color: #d84b2a;
    transform: scale(1.1);
  }
`;

export const SubText = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  color: #f0f4f7;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease 4.5s forwards;
  width: fit-content;
  text-align: left;
  margin-left: 0.5rem;
`;
