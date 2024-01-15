import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../service/characterApi";
import { Container } from "../components/container/Container";
import {
  ResponsiveProfile,
  ResponsiveProfileItem,
} from "../components/characterDetails/CharacterDetails";
import { getLocationById } from "../service/locationApi";
import { getEpisodeById } from "../service/episodeApi";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import {
  CardContainer,
  CardDetails,
} from "../components/characterProfileCard/StyledCard";
import Loader from "../components/loader/Loader";
import Image from "../assets/bg1.jpg";
import styles from "../styles/characterProfile.module.scss";
import { Character, Episode, Location } from "../types/common";

function CharacterProfile() {
  const params = useParams();
  const { id } = params; // get id from params
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<Character>();
  const [originDetails, setOriginDetails] = useState<Location>();
  const [locationDetails, setLocationDetails] = useState<Location>();
  const [episodesList, setEpisodesList] = useState<Episode[]>([]);

  const getCharacterDetail = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const { data } = await getCharacterById(id);
      setCharacter(data);

      if (data.origin.url) getDetails(data.origin.url, "origin"); // getting origin details if exists
      if (data.location.url) getDetails(data.location.url, "current"); // getting current location details if exists
      getFeaturedEpisodes(data.episode);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  // getting location details
  const getDetails = async (url: string, location: "origin" | "current") => {
    // id from provided url
    const id = url.replace("https://rickandmortyapi.com/api/location/", "");
    try {
      const { data } = await getLocationById(id);
      // setting origin or current location in state
      if (location === "origin") setOriginDetails(data);
      else setLocationDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  // get featured episodes
  const getFeaturedEpisodes = async (episode: string[]) => {
    // list of all ids from character details
    const ids = episode.map((ep) =>
      parseInt(ep.replace("https://rickandmortyapi.com/api/episode/", ""))
    );

    try {
      const { data } = await getEpisodeById(ids.toString());
      setEpisodesList(ids.length > 1 ? data : [data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // get candidtate details based on id from param
    if (id) getCharacterDetail(id);
  }, [getCharacterDetail, id]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ResponsiveProfile>
            <ResponsiveProfileItem>
              <img
                width={"100%"}
                src={character?.image}
                alt={character?.name}
              />
            </ResponsiveProfileItem>
            <ResponsiveProfileItem>
              <div className={styles.detailContainer}>
                <p className={styles.label}>Name : </p>
                <p className={styles.name}>{character?.name}</p>
              </div>
              <div className={styles.detailContainer}>
                <p className={styles.label}>Status : </p>
                <p
                  className={styles.status}
                  style={{
                    backgroundColor:
                      character?.status.toLowerCase() === "alive"
                        ? "green"
                        : character?.status.toLowerCase() === "dead"
                        ? "red"
                        : "#36454F",
                  }}
                >
                  {character?.status}
                </p>
              </div>
              <div className={styles.detailContainer}>
                <p className={styles.label}>Species : </p>
                <p className={styles.species}>{character?.species}</p>
              </div>
              <div className={styles.detailContainer}>
                <p className={styles.label}>Gender : </p>
                <p className={styles.gender}>{character?.gender}</p>
              </div>
              {character?.type && (
                <div className={styles.detailContainer}>
                  <p className={styles.label}>Type : </p>
                  <p className={styles.type}>{character?.type}</p>
                </div>
              )}
              <div className={styles.detailContainer}>
                <p className={styles.label}>Origin : </p>
                <p className={styles.type}>{character?.origin.name}</p>
              </div>
              <div className={styles.detailContainer}>
                <p className={styles.label}>Last seen at : </p>
                <p className={styles.type}>{character?.location.name}</p>
              </div>
            </ResponsiveProfileItem>

            {locationDetails ? (
              <ResponsiveProfileItem>
                <div className={styles.locationDetails}>
                  <h4>{"Location Details"}</h4>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Name : </p>
                    <p
                      className={styles.locationLink}
                      onClick={() =>
                        navigate(`/locations/${locationDetails?.id}`)
                      }
                    >
                      {locationDetails?.name}
                    </p>
                  </div>

                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Dimension : </p>
                    <p className={styles.type}>{locationDetails?.dimension}</p>
                  </div>

                  <div className={styles.detailContainer}>
                    <p className={styles.label}>No. of residents : </p>
                    <p className={styles.type}>
                      {locationDetails?.residents?.length}
                    </p>
                  </div>

                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Type : </p>
                    <p className={styles.type}>{locationDetails?.type}</p>
                  </div>
                </div>
              </ResponsiveProfileItem>
            ) : null}

            {originDetails ? (
              <ResponsiveProfileItem>
                <div className={styles.originDetails}>
                  <h4>{"Origin Details"}</h4>
                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Name : </p>
                    <p className={styles.type}>{originDetails?.name}</p>
                  </div>

                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Dimension : </p>
                    <p className={styles.type}>{originDetails?.dimension}</p>
                  </div>

                  <div className={styles.detailContainer}>
                    <p className={styles.label}>No. of residents : </p>
                    <p className={styles.type}>
                      {originDetails?.residents?.length}
                    </p>
                  </div>

                  <div className={styles.detailContainer}>
                    <p className={styles.label}>Type : </p>
                    <p className={styles.type}>{originDetails?.type}</p>
                  </div>
                </div>
              </ResponsiveProfileItem>
            ) : null}
          </ResponsiveProfile>
          <div className={styles.episodeDetails}>
            <h4>{"Episodes featured"}</h4>

            <GridContainer>
              {episodesList.map((episode: Episode, i: number) => {
                return (
                  <GridItem key={i}>
                    <CardContainer
                      backgroundimage={`url(${Image})`}
                      onClick={() => navigate(`/episodes/${episode.id}`)}
                    >
                      <CardDetails>
                        <p className={styles.episodeName}>{episode.name}</p>
                        <p className={styles.episodeNumber}>
                          {episode.episode}
                        </p>
                        <p className={styles.episodeDate}>
                          Aired: {episode.air_date}
                        </p>
                      </CardDetails>
                    </CardContainer>
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

export default CharacterProfile;
