import { useState } from "react";
import { getEpisodes } from "../service/episodeApi";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import { Container } from "../components/container/Container";

function EpisodesList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [name, setName] = useState<string>("");

  const getAllEpisodes = async () => {
    try {
      const { data } = await getEpisodes(page, name);

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setEpisodes((prevEpisodes) => [...prevEpisodes, ...data.results]);
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
        <GridContainer>
          {episodes.map((episode: any, i: number) => {
            return (
              <GridItem key={i}>
                <div>{episode.name}</div>
              </GridItem>
            );
          })}
        </GridContainer>
      )}
    </Container>
  );
}

export default EpisodesList;
