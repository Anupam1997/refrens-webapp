import React from "react";
import { Status } from "../../types/common";
import { CardContainer, CardDetails, Image } from "./StyledCard";
import styles from "./character.module.scss";
import { useNavigate } from "react-router-dom";
type ICharacterProfileCard = {
  id: number;
  name: string;
  status: Status;
  location: string;
  image: string;
};
function CharacterProfileCard({
  id,
  name,
  status,
  location,
  image,
}: ICharacterProfileCard) {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`${id}`)}>
      <div
        className={styles.statusChip}
        style={{
          backgroundColor:
            status.toLowerCase() === "alive"
              ? "green"
              : status.toLowerCase() === "dead"
              ? "red"
              : "#36454F",
        }}
      >
        {status}
      </div>
      <Image src={image} alt={name} />
      <CardDetails>
        <p className={styles.characterName}>{name}</p>

        <p className={styles.characterLocation}>
          <span>Location: </span>
          {location}
        </p>
      </CardDetails>
    </CardContainer>
  );
}

export default CharacterProfileCard;
