// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Smart Lights</p>
      <p>
        <a href="#privacy">Privacy Policy</a> |
        <a href="#terms">Terms & Conditions</a> |
        <a href="#cookie">Cookie Policy</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
