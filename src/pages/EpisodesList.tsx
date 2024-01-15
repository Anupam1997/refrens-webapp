import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEpisodes } from "../service/episodeApi";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import { Container } from "../components/container/Container";
import Pagination from "../components/pagination/Pagination";
import SearchField from "../components/search/Search";
import {
  CardContainer,
  CardDetails,
} from "../components/characterProfileCard/StyledCard";
import Loader from "../components/loader/Loader";
import Image from "../assets/bg1.jpg";
import { Episode } from "../types/common";
function EpisodesList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [name, setName] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();
  const getAllEpisodes = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getEpisodes(page, name);
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);
    } catch (error) {
      setEpisodes([]);
      setLoading(false);
      console.log(error);
    }
  }, [page, name]); // dependencies go here

  useEffect(() => {
    getAllEpisodes();
  }, [getAllEpisodes]);
  return (
    <Container>
      <GridContainer>
        <SearchField
          onChange={(e) => {
            setPage(() => 1);
            setName(e.target.value);
          }}
          value={name}
          placeholder={"Search by name..."}
        />
      </GridContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <GridContainer>
            {episodes.map((episode: Episode, i: number) => {
              return (
                <GridItem key={i}>
                  <CardContainer
                    onClick={() => navigate(`${episode.id}`)}
                    backgroundimage={`url(${Image})`}
                  >
                    <CardDetails>
                      <p>{episode.name}</p>
                      <p>{episode.episode}</p>
                      <p>Aired: {episode.air_date}</p>
                    </CardDetails>
                  </CardContainer>
                </GridItem>
              );
            })}
          </GridContainer>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(currPage) =>
              page !== currPage ? setPage(currPage) : null
            }
          />
        </>
      )}
    </Container>
  );
}

export default EpisodesList;
