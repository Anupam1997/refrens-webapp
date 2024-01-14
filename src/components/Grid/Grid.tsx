// Grid.tsx
import styled from "styled-components";
import { media } from "../../types/breakpoints";

export const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(4, 1fr);

  ${media.xl`
  grid-template-columns: repeat(4,  1fr);
`}

  ${media.lg`
grid-template-columns: repeat(3,  1fr);
`}

  ${media.md`
    grid-template-columns: repeat(3,  1fr);
  `}

  ${media.sm`
    grid-template-columns:repeat(1,  1fr);
  `}
`;

export const GridItem = styled.div`
  font-size: 18px;
`;
