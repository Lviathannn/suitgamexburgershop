import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
  const [isLoading, isLoadingSet] = useState(false);
  const [data, dataSet] = useState<WeatherData | Recipe>();

  async function fetcher(url: string) {
    try {
      isLoadingSet(true);

      const { data: dataRes } = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_BASE_URL,
        url: url,
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      });
      dataSet(dataRes);
      isLoadingSet(false);
      return dataRes;
    } catch (error) {
      isLoadingSet(false);
    }
  }

  return { fetcher, isLoading, data };
};
