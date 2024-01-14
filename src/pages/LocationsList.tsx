import { useState } from "react";
import { getLocations } from "../service/locationApi";
import { GridContainer, GridItem } from "../components/Grid/Grid";
import { Container } from "../components/container/Container";

function LocationsList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [locations, setLocations] = useState<any[]>([]);
  const [name, setName] = useState<string>("");

  const getAllLocations = async () => {
    try {
      const { data } = await getLocations(page, name);

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setLocations((prevLocations) => [...prevLocations, ...data.results]);
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
          {locations.map((location: any, i: number) => {
            return <GridItem key={i}>{location.name}</GridItem>;
          })}
        </GridContainer>
      )}
    </Container>
  );
}

export default LocationsList;
