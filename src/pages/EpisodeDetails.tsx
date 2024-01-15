import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../service/characterApi";
import { Container } from "../components/container/Container";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import { getEpisodeById } from "../service/episodeApi";
import Loader from "../components/loader/Loader";
import { Character, Episode } from "../types/common";
import CharacterListRender from "../components/characterListRender/CharacterListRender";
import styles from "../styles/episode.module.scss";

function EpisodeDetails() {
  const params = useParams();
  const { id } = params; // get id from params
  const [loading, setLoading] = useState(false);
  const [episodeDetails, setEpisodeDetails] = useState<Episode>();
  const [characters, setCharacters] = useState<Character[]>([]);

  const getEpisodeDetails = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const { data } = await getEpisodeById(id);
      setEpisodeDetails(data);

      getCharacters(data.characters);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const getCharacters = async (characters: string[]) => {
    // list of all ids from location details
    const ids = characters.map((resident) =>
      parseInt(
        resident.replace("https://rickandmortyapi.com/api/character/", "")
      )
    );

    try {
      const { data } = await getCharacterById(ids.toString());
      setCharacters(ids.length > 1 ? data : [data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // get location details based on id from param
    if (id) getEpisodeDetails(id);
  }, [getEpisodeDetails, id]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {episodeDetails ? (
            <>
              <h4 className={styles.heading}>{"Location Details"}</h4>
              <GridContainer>
                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Name : </p>
                    <p className={styles.value}>{episodeDetails?.name}</p>
                  </div>
                </GridItem>

                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Episode : </p>
                    <p className={styles.value}>{episodeDetails?.episode}</p>
                  </div>
                </GridItem>
                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Aired : </p>
                    <p className={styles.value}>{episodeDetails?.air_date}</p>
                  </div>
                </GridItem>
              </GridContainer>
            </>
          ) : null}

          <div className="">
            <h4 className={styles.heading}>{"Characters Featured"}</h4>
            <CharacterListRender characters={characters} />
          </div>
        </>
      )}
    </Container>
  );
}

export default EpisodeDetails;
