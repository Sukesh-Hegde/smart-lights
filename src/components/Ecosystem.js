
// src/components/Ecosystem.js
import React from 'react';
import styled from 'styled-components';
import streetLight from "../components/assets/street_light_controler.png"
import gateway from '../components/assets/gateway_png.png'
import cloud from '../components/assets/cloud_based management.png'
import user from '../components/assets/users_png.png'
import evaluation from '../components/assets/evaluation_png.png'

const EcosystemContainer = styled.section`
  padding: 50px;
  background-color: #f0f0f0;
  height: 100vh;
`;

const EcosystemGrid = styled.div`
  display: block;  
`;

const EcosystemItem = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 250px;
  text-align: center;
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

const Ecosystem = () => {
  return (
    <EcosystemContainer>
      <div style={styles.container}>
        <span style={styles.label}>Ecosystem</span>
      </div>
      <h2>How does a smart street </h2>
      <h2>light ecosystem work?</h2>
      <div></div>
      <EcosystemGrid>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <EcosystemItem>
            <div style={{ display: "flex", gap: "160px" }}>
              <div
                style={{
                  border: "2px dotted black",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={streetLight}
                  alt="streetLight"
                  style={{
                    border: "2px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                />
              </div>
              <div
                style={{
                  border: "2px dotted black",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={streetLight}
                  alt="streetLight"
                  style={{
                    border: "2px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                />
              </div>
            </div>

            <h6 style={{ padding: "10px" }}>Street Light Controller</h6>
            <p>
              Activates/deactivates in response to motion/light sensing and
              controls the brightness of the street lamp
            </p>
          </EcosystemItem>
          <EcosystemItem>
            <img src={gateway} alt="gateway" />
            <h6 style={{ padding: "10px" }}>Gateway</h6>
            <p>
              Employed for interfacing between a Controller and Lighting
              Management Software
            </p>
          </EcosystemItem>

          <EcosystemItem>
            <img src={cloud} alt="cloud" />
            <h6 style={{ padding: "10px" }}>Cloud-bassed Management System</h6>
            <p>Collect information from multiple gateways.</p>
          </EcosystemItem>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <EcosystemItem>
            <img src={user} alt="user" />
            <h6 style={{ padding: "10px" }}>user</h6>
            <p>Data from the cloud is used to</p>
            <p>moitor and control street lights by the system Managers</p>
          </EcosystemItem>

          <EcosystemItem>
            <img src={evaluation} alt="evaluation" />
            <h6 style={{ padding: "10px" }}>Evaluation</h6>
            <p>Gathered insights are used to evaluate the performance of the lighting System</p>
          </EcosystemItem>
        </div>
      </EcosystemGrid>
    </EcosystemContainer>
  );
};

export default Ecosystem;
