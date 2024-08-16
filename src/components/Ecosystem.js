// src/components/Ecosystem.js
import React from "react";
import styled from "styled-components";

const EcosystemContainer = styled.section`
  padding: 50px;
  background-color: #f0f0f0;
`;

const EcosystemGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const EcosystemItem = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 250px;
  text-align: center;
`;

const Ecosystem = () => {
  return (
    <EcosystemContainer>
      <h2>How does a smart street light ecosystem work?</h2>
      <EcosystemGrid>
        <EcosystemItem>
          <h3>Smart Light Controller</h3>
          <p>Description of the smart light controller...</p>
        </EcosystemItem>
        <EcosystemItem>
          <h3>Gateway</h3>
          <p>Description of the gateway...</p>
        </EcosystemItem>
        <EcosystemItem>
          <h3>Cloud</h3>
          <p>Description of the cloud service...</p>
        </EcosystemItem>
        {/* Add more items as needed */}
      </EcosystemGrid>
    </EcosystemContainer>
  );
};

export default Ecosystem;
