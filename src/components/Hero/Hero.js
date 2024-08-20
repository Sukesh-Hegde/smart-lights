// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import heroImage from "../assets/Hero_section.png";

const HeroContainer = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: top;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <div id="Hero">
      <HeroContainer>
        <h5>Smart Lighting Solutions</h5>
        <h1>Bringing A New Perspective To</h1>
        <h1> Street Lights And The Cities Of Tomorrow.</h1>
        <Button>Learn More</Button>
      </HeroContainer>
    </div>
  );
};

export default Hero;
