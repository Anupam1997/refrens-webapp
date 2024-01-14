// Grid.tsx
import styled from "styled-components";
import { media } from "../../types/breakpoints";

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
  ${media.xxl`
  max-width: 1140px;
`}
  ${media.xl`
  max-width: 1140px;
`}
  ${media.lg`
  max-width: 960px;
`}
  ${media.md`
  max-width: 720px;
  `}

 

 

  ${media.sm`
  max-width: 390px;
  `}
`;

export const GridItem = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  text-align: center;
  font-size: 18px;
`;
