import axios, { AxiosResponse } from "axios";

export const getUsers = async (
  page?: number,
  limit?: number
): Promise<AxiosResponse> => {
  return await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/tweets/get-users`,
    {
      params: {
        limit,
        page,
      },
    }
  );
};
