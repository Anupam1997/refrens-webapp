import Axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const ApiHelper = Axios.create({
  baseURL: BASE_URL,
});

ApiHelper.interceptors.request.use((req) => {
  req.headers["Content-Type"] = "application/json";
  return req;
});

export const handleApiError = async (error: any) => {
  try {
    const errorMessage =
      error.response?.data?.error || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
};
