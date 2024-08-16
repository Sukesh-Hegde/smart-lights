// src/components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Smart Lights</Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#services">Software Services</a>
        <button>Login</button>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
