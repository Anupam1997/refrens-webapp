import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const PortalGun = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ecf0f1;
  border-top: 8px solid cyan;
  animation: ${spinAnimation} 1.5s linear infinite;
`;

const Loader = () => {
  return (
    <Wrapper>
      <PortalGun />
    </Wrapper>
  );
};

export default Loader;
