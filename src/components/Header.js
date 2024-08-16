// src/components/Header.js
import React from "react";
import logo from "../components/assets/smart lights_logo.svg"
// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #000;
//   color: #fff;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;
// `;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="110"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
            <li className="nav-item">
              <a className="nav-link active"  aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Software Service
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-success" type="submit">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

{/* <HeaderContainer>
      <Logo>Smart Lights</Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#services">Software Services</a>
        <button>Login</button>
      </Nav>
    </HeaderContainer> */}