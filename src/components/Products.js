// src/components/Products.js
import React from "react";
import styled from "styled-components";

const ProductsContainer = styled.section`
  padding: 50px;
  background-color: #fff;
`;

const ProductItem = styled.div`
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
};


const Products = () => {
  return (
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
        <h3>Centralized Control & Monitoring System</h3>
        <p>Description of the system...</p>
      </ProductItem>
      {/* Add more products as needed */}
    </ProductsContainer>
  );
};

export default Products;
