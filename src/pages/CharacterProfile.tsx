import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../service/characterApi";

function CharacterProfile() {
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<any>();
  const getCharacterDetail = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getCharacterDetail(id);
  }, [id]);
  return <div>{loading ? "Loading..." : "CharacterProfile"}</div>;
}

export default CharacterProfile;
