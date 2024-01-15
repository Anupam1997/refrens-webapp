import { Gender, Status } from "../types/common";
import { ApiHelper, handleApiError } from "./utils";

export const getCharacters = async (
  page?: number,
  name?: string,
  status?: Status,
  species?: string,
  type?: string,
  gender?: Gender
) => {
  try {
    const { data } = await ApiHelper.get(`/character`, {
      params: {
        page,
        name,
        status,
        species,
        type,
        gender,
      },
    });
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getCharacterById = async (id: string) => {
  try {
    const { data } = await ApiHelper.get(`/character/${id}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
