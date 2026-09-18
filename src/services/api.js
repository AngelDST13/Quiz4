import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCharacters = async (page = 1, name = '', status = '') => {
  try {
    const params = {};
    if (page) params.page = page;
    if (name) params.name = name;
    if (status) params.status = status;

    const response = await api.get('/character', { params });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { results: [], info: { pages: 0 } };
    }
    throw error;
  }
};

export const getCharacterById = async (id) => {
  const response = await api.get(`/character/${id}`);
  return response.data;
};