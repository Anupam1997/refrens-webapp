import { ApiHelper, handleApiError } from "./utils";

export const getEpisodes = async (page: number, name?: string) => {
  try {
    const { data } = await ApiHelper.get(`/episode`, {
      params: {
        page,
        name,
      },
    });
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getEpisodeById = async (id: string) => {
  try {
    const { data } = await ApiHelper.get(`/episode/${id}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
