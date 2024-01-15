import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLocationById } from "../service/locationApi";
import { getCharacterById } from "../service/characterApi";
import { Container } from "../components/container/Container";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import CharacterProfileCard from "../components/characterProfileCard/CharacterProfileCard";
import Loader from "../components/loader/Loader";
import styles from "../styles/location.module.scss";
import { Character, Location } from "../types/common";

function LocationDetails() {
  const params = useParams();
  const { id } = params; // get id from params
  const [loading, setLoading] = useState(false);
  const [locationDetails, setLocationDetails] = useState<Location>();
  const [characters, setCharacters] = useState<Character[]>([]);

  const getLocationDetails = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const { data } = await getLocationById(id);
      setLocationDetails(data);

      data.residents.length && getResidents(data.residents);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const getResidents = async (residents: string[]) => {
    // list of all ids from location details
    const ids = residents.map((resident) =>
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
    if (id) getLocationDetails(id);
  }, [getLocationDetails, id]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {locationDetails ? (
            <>
              <h4 className={styles.heading}>{"Location Details"}</h4>
              <GridContainer>
                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Name : </p>
                    <p className={styles.value}>{locationDetails?.name}</p>
                  </div>
                </GridItem>

                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Dimension : </p>
                    <p className={styles.value}>{locationDetails?.dimension}</p>
                  </div>
                </GridItem>
                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>No. of residents : </p>
                    <p className={styles.value}>
                      {locationDetails?.residents?.length}
                    </p>
                  </div>
                </GridItem>
                <GridItem>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Type : </p>
                    <p className={styles.value}>{locationDetails?.type}</p>
                  </div>
                </GridItem>
              </GridContainer>
            </>
          ) : null}

          <div className="">
            <h4 className={styles.heading}>{"Related Characters"}</h4>

            <GridContainer>
              {characters.map((character: Character, i: number) => {
                return (
                  <GridItem key={i}>
                    <CharacterProfileCard
                      id={character.id}
                      name={character.name}
                      status={character.status}
                      location={character.location?.name}
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

export default LocationDetails;
