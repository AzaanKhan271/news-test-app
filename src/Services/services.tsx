import axios from "axios";
import { baseUrl } from "../utils/constants";
import { GetNewsArticleProps } from "../utils/interface";

export const getNewsArticles = async ({
  topic,
  language,
  toDate,
  fromDate,
  apiKey,
  sortBy,
}: GetNewsArticleProps) => {
  const API_URL = `${
    import.meta.env.VITE_PROXYLINK
  }/${baseUrl}/everything?q=${topic}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&language=${language}&apiKey=${apiKey}`;
  const response = await axios.get(API_URL, {
    headers: {
        Origin: "http://localhost:3000",
    },
  });
  if (response) {
    let data = response.data;
    return data;
  }
};
