import { ApiHelper, handleApiError } from "./utils";

export const getLocations = async (page?: number, name?: string) => {
  try {
    const { data } = await ApiHelper.get(`/location`, {
      params: {
        page,
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
