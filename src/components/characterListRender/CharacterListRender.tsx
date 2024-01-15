import React from "react";
import { Character } from "../../types/common";
import { GridContainer, GridItem } from "../Grid/Grid";
import CharacterProfileCard from "../characterProfileCard/CharacterProfileCard";

function CharacterListRender({ characters }: { characters: Character[] }) {
  return (
    <GridContainer>
      {characters.map((character: Character, i: number) => {
        return (
          <GridItem key={i}>
            <CharacterProfileCard
              id={character.id}
              name={character.name}
              status={character.status}
              location={character.location.name}
              image={character.image}
            />
          </GridItem>
        );
      })}
    </GridContainer>
  );
}

export default CharacterListRender;
