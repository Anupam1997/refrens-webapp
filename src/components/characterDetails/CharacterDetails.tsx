// Grid.tsx
import styled from "styled-components";
import { media } from "../../types/breakpoints";

export const ResponsiveProfile = styled.div`
  display: grid;
  padding: 16px;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  ${media.xl`
  grid-template-columns: repeat(2,  1fr);
`}

  ${media.lg`
grid-template-columns: repeat(2,  1fr);
`}

  ${media.md`
    grid-template-columns: repeat(2,  1fr);
  `}

  ${media.sm`
    grid-template-columns:repeat(1,  1fr);
  `}
`;

export const ResponsiveProfileItem = styled.div`
  font-size: 18px;
`;
