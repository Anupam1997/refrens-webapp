import { ApiHelper, handleApiError } from "./utils";

export const getLocations = async (name?: string) => {
  try {
    const { data } = await ApiHelper.get(`/location`, {
      params: {
        name,
      },
    });
    return { error: null, data };
  } catch (error: any) {
    return handleApiError(error);
  }
};

export const getLocationById = async (id: string) => {
  try {
    const { data } = await ApiHelper.get(`/location/${id}`);
    return { error: null, data };
  } catch (error: any) {
    return handleApiError(error);
  }
};
