import React, { useCallback, useEffect, useState } from "react";
import { getCharacters } from "../service/characterApi";
import {
  Character,
  Gender,
  GenderType,
  Status,
  StatusType,
} from "../types/common";
import { GridContainer } from "../components/Grid/Grid";
import { Container } from "../components/container/Container";
import SearchField from "../components/search/Search";
import SelectField from "../components/select/SelectField";
import Pagination from "../components/pagination/Pagination";
import Empty from "../components/empty/Empty";
import Loader from "../components/loader/Loader";
import CharacterListRender from "../components/characterListRender/CharacterListRender";

const genderOptions = [
  { label: GenderType.MALE, value: GenderType.MALE },
  { label: GenderType.FEMALE, value: GenderType.FEMALE },
  { label: GenderType.GENDERLESS, value: GenderType.GENDERLESS },
  { label: GenderType.UNKNOWN, value: GenderType.UNKNOWN },
];

const statusOptions = [
  { label: StatusType.ALIVE, value: StatusType.ALIVE },
  { label: StatusType.DEAD, value: StatusType.DEAD },
  { label: StatusType.UNKNOWN, value: StatusType.UNKNOWN },
];
function CharactersList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [status, setStatus] = useState<Status | "">("");
  const [name, setName] = useState<string>("");
  const [species, setSpeices] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [gender, setGender] = useState<Gender | "">("");
  const [totalPages, setTotalPages] = useState<number>(0);

  const getAllCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getCharacters(
        page,
        name ? name : undefined,
        status ? status : undefined,
        species ? species : undefined,
        type ? type : undefined,
        gender ? gender : undefined
      );

      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);
    } catch (error) {
      setCharacters([]);
      setLoading(false);
      console.log(error);
    }
  }, [gender, name, page, species, status, type]);

  useEffect(() => {
    // get all character when filters or page changes
    getAllCharacters();
  }, [gender, getAllCharacters, name, species, status, type]);

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

        <SelectField
          name="Gender"
          id="genders"
          value={gender}
          onChange={(e) => {
            setPage(() => 1);
            setGender(e.target.value as Gender);
          }}
          options={genderOptions}
        />

        <SelectField
          name="Status"
          id="status"
          value={status}
          onChange={(e) => {
            setPage(() => 1);
            setStatus(e.target.value as Status);
          }}
          options={statusOptions}
        />

        <SearchField
          onChange={(e) => {
            setPage(() => 1);
            setSpeices(e.target.value);
          }}
          value={species}
          placeholder={"Search by species..."}
        />

        <SearchField
          onChange={(e) => {
            setPage(() => 1);
            setType(e.target.value);
          }}
          value={type}
          placeholder={"Search by type..."}
        />
      </GridContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          {characters.length ? (
            <>
              <CharacterListRender characters={characters} />
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(currPage) =>
                  page !== currPage ? setPage(currPage) : null
                }
              />
            </>
          ) : (
            <Empty name={"Characters"} />
          )}
        </>
      )}
    </Container>
  );
}

export default CharactersList;
