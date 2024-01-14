import styled from "styled-components";

// Define a styled component for the image
export const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export const CardContainer = styled.div`
  border: 1.5px solid #193840;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 2px solid #42b4ca;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;
export const CardDetails = styled.div`
  padding: 8px;
  min-height: 100px;
`;
