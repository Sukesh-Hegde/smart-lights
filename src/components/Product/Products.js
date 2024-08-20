// src/components/Products.js
import React from "react";
import styled from "styled-components";
import './product.css';
import smartLight from '../assets/smart_lights.png'
import icon from "../assets/icon_png.png";

const ProductsContainer = styled.section`
  padding: 50px;
  background-color: #fff;
`;

const ProductItem = styled.div`
  displau: flex;
  margin: 20px 0;
`;

const styles = {
  container: {
    display: "inline-block",
    background: "linear-gradient(to right, #e0eafc, #cfdef3)",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  label: {
    color: "#003366",
    fontSize: "18px",
    fontWeight: "bold",
    transform: "skewX(-10deg)",
    display: "inline-block",
  },
  types: {
    backgroundColor: "white",
    padding: "5px",
    border: "1px solid black", // Border style
    borderRadius: "5px",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Products = () => {
  return (
    <div id="product">
      <ProductsContainer>
        <div style={styles.container}>
          <span style={styles.label}>Products</span>
        </div>
        <h2
          style={{
            width: "550px",
          }}
        >
          <b>Cutting-edge hardware</b>, offerings helping cities optimize
          resources and achieve smart development goals
        </h2>
        <ProductItem>
          <div className="container">
            <div className="header-buttons">
              <button className="header-button ">
                Centralized Control & Monitoring System
              </button>
              <button className="header-button">NEMA-Mounted VOLC 1160</button>
              <button className="header-button">
                Retrofit Street Light Controller VOLC 2160
              </button>
              <button className="header-button">
                Retrofit Street Light Controller VOLC 2180
              </button>
              <button className="header-button">
                Retrofit Street Light Controller VOLC 4180
              </button>
            </div>

            {/* Main Content */}
            <div className="content">
              {/* Image Section */}
              <div className="image-section">
                <img
                  src={smartLight}
                  alt="Street lights"
                  className="streetlight-image"
                />
              </div>

              {/* Text Section */}
              <div className="text-section">
                <h3>Products 1/5</h3>
                <h1>Centralized Control & Monitoring System</h1>
                <p>
                  Designed indigenously for street lighting projects, the CCMS
                  offers a complete feeder panel for a group of 30-50 street
                  lights.
                </p>
                <div className="symbol-container">
                  <a>Know More </a>
                  <img src={icon} alt="symbol" className="symbol" />
                </div>
              </div>
            </div>
          </div>
        </ProductItem>
      </ProductsContainer>
    </div>
  );
};

export default Products;
