import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getCharacters } from "../service/characterApi";
import { Gender, Status } from "../types/common";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import { Container } from "../components/Container.tsx/Container";

function CharactersList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [characters, setCharacters] = useState<any[]>([]);
  const [status, setStatus] = useState<Status | "">("");
  const [name, setName] = useState<string>("");
  const [species, setSpeices] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [gender, setGender] = useState<Gender | "">("");

  const getAllCharacters = async () => {
    try {
      const { data } = await getCharacters(
        page,
        name,
        status ? status : undefined,
        species,
        type,
        gender ? gender : undefined
      );

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
        setPage((prevPage) => prevPage + 1);
        if (!data.info.next) setHasMore(false);
      }
    } catch (error) {
      setHasMore(false);
    }
  };

  return (
    <Container>
      {loading ? (
        "Loading..."
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={getAllCharacters}
          hasMore={hasMore}
          loader={<div key={0}>Loading...</div>}
        >
          <GridContainer>
            {characters.map((character: any, i: number) => {
              return <GridItem key={i}>{character.name}</GridItem>;
            })}
          </GridContainer>
        </InfiniteScroll>
      )}
    </Container>
  );
}

export default CharactersList;
