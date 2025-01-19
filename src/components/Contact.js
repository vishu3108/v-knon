import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #34495e;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #2c3e50;
  padding: 2rem;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #f39c12;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <ContactForm>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" rows="6" />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;
