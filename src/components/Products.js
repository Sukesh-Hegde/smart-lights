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

const Products = () => {
  return (
    <ProductsContainer>
      <h2>Cutting-edge hardware</h2>
      <ProductItem>
        <h3>Centralized Control & Monitoring System</h3>
        <p>Description of the system...</p>
      </ProductItem>
      {/* Add more products as needed */}
    </ProductsContainer>
  );
};

export default Products;
