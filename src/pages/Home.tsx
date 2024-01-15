import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/container/Container";
import {
  CardContainer,
  CardDetails,
} from "../components/characterProfileCard/StyledCard";
import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import styles from "../styles/home.module.scss";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <CardContainer
        margin="20px 0px"
        backgroundimage={`url(${Image1})`}
        onClick={() => navigate("characters")}
      >
        <CardDetails>
          <div className={styles.dispCard}>
            <div className={styles.content}>
              <h1>Characters</h1>
            </div>
          </div>
        </CardDetails>
      </CardContainer>
      <CardContainer
        margin="20px 0px"
        backgroundimage={`url(${Image2})`}
        onClick={() => navigate("locations")}
      >
        <CardDetails>
          <div className={styles.dispCard}>
            <div className={styles.content}>
              <h1>Locations</h1>
            </div>
          </div>
        </CardDetails>
      </CardContainer>
      <CardContainer
        margin="20px 0px"
        backgroundimage={`url(${Image3})`}
        onClick={() => navigate("episodes")}
      >
        <CardDetails>
          <div className={styles.dispCard}>
            <div className={styles.content}>
              <h1>Episodes</h1>
            </div>
          </div>
        </CardDetails>
      </CardContainer>
      <br />
    </Container>
  );
}

export default Home;
