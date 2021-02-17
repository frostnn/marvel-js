import axios from 'axios';
import { API_KEY } from '../const/api';

const getDataApi = async (url) => {
  try {
    const response = await axios.get(url, {
      params: {
        apikey: API_KEY,
        limit: 20,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export default getDataApi;
