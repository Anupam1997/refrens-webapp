import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../service/characterApi";
import { Container } from "../components/container/Container";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import CharacterProfileCard from "../components/characterProfileCard/CharacterProfileCard";
import { getEpisodeById } from "../service/episodeApi";
import Loader from "../components/loader/Loader";
import styles from "../styles/episode.module.scss";

function EpisodeDetails() {
  const params = useParams();
  const { id } = params; // get id from params
  const [loading, setLoading] = useState(false);
  const [episodeDetails, setEpisodeDetails] = useState<any>(null);
  const [characters, setCharacters] = useState<any[]>([]);

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
    let ids = characters.map((resident) =>
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
            <h4 className={styles.heading}>{"Related Characters"}</h4>

            <GridContainer>
              {characters.map((character: any, i: number) => {
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
          </div>
        </>
      )}
    </Container>
  );
}

export default EpisodeDetails;
