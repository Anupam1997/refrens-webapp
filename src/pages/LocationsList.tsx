import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocations } from "../service/locationApi";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import { Container } from "../components/container/Container";
import Pagination from "../components/pagination/Pagination";
import SearchField from "../components/search/Search";
import {
  CardContainer,
  CardDetails,
} from "../components/characterProfileCard/StyledCard";
import Image from "../assets/bgImage.jpg";
import Loader from "../components/loader/Loader";
import styles from "../styles/location.module.scss";

function LocationsList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [locations, setLocations] = useState<any[]>([]);
  const [name, setName] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();

  const getAllLocations = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getLocations(page, name);
      setLocations(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);
    } catch (error) {
      setLocations([]);
      setLoading(false);
      console.log(error);
    }
  }, [page, name]); // dependencies go here

  useEffect(() => {
    getAllLocations();
  }, [getAllLocations]);

  return (
    <Container>
      <GridContainer>
        <SearchField
          onChange={(e: any) => {
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
            {locations.map((location: any, i: number) => {
              return (
                <GridItem key={i}>
                  <CardContainer
                    backgroundimage={`url(${Image})`}
                    onClick={() => navigate(`${location.id}`)}
                  >
                    <CardDetails>
                      <p className={styles.locationName}>
                        Name : {location.name}
                      </p>
                      <p className={styles.locationDimension}>
                        Dimension : {location.dimension}
                      </p>
                      <p className={styles.locationType}>
                        Type : {location.type}
                      </p>
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

export default LocationsList;
