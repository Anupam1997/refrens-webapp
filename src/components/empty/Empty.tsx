import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
`;

const Image = styled.img`
  margin-bottom: 20px;
`;

const Empty = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <Title>No {name} Found</Title>
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick and Morty"
      />
      <p>Looks like we couldn&apos;t find anything in the multiverse!</p>
    </Wrapper>
  );
};

export default Empty;
