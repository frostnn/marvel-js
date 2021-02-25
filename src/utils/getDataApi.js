import axios from 'axios';
import { API_KEY } from '../const/api';

const getDataApi = async (url) => {
  try {
    const response = await axios.get(url, {
      params: {
        apikey: API_KEY,
        limit: 100,
      },
    });
    return response.data.data.results;
  } catch (error) {
    return false;
  }
};

export default getDataApi;
