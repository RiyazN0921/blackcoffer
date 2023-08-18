import axios from 'axios';

const API_URL = 'http://localhost:8080/api/data';

export const fetchData = async (filters) => {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
