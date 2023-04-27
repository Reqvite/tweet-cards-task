import axios, { AxiosResponse } from "axios";

export const getUsers = async (
  page?: number,
  limit?: number
): Promise<AxiosResponse> => {
  return await axios.get(
    "https://644a3650a8370fb32147b2ab.mockapi.io/api/tweets/get-users",
    {
      params: {
        limit,
        page,
      },
    }
  );
};
