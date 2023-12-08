import axios from 'axios'
import { baseUrl } from '../utils/constants';

// interface GetNewsArticleProps {
//     topic : string,
//     language : string,
//     toDate : Object,
//     fromDate : Date,
//     apiKey : string,
//     sortBy : string,
// }


export const getNewsArticles = async () => {
    // {topics, language,toDate,fromDate,apiKey,sortBy} = body
    const API_URL = `${baseUrl}/everything?q=apple&from=2023-12-05&to=2023-12-05&sortBy=popularity&apiKey=02b08f799606478db353442e2cdc805c`;
      const response = await axios.get(API_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
      if (response) {
        console.log(response)
        let data = response.data
        return data;
      }
  }