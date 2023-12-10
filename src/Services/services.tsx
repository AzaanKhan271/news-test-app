import axios from "axios";
import { baseUrl } from "../utils/constants";

interface GetNewsArticleProps {
  topic: string;
  language: string;
  toDate: string;
  fromDate: string;
  apiKey: string | undefined;
  sortBy: string;
}

export const getNewsArticles = async ({
  topic,
  language,
  toDate,
  fromDate,
  apiKey,
  sortBy,
}: GetNewsArticleProps) => {
  const API_URL = `${process.env.PROXYLINK}/${baseUrl}/everything?q=${topic}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&language=${language}&apiKey=${apiKey}`;
  const response = await axios.get(API_URL, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response) {
    let data = response.data;
    return data;
  }
};
