import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Fetch all movies with pagination and optional search query
export const getMovies = async (page = 1, pageSize = 10, searchQuery = '') => {
  try {
    // Make an HTTP GET request to fetch movies with pagination and an optional search query
    const response = await axios.get(
      `${API_URL}/getall?page=${page}&pageSize=${pageSize}&q=${searchQuery}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Fetch a single movie by ID
export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};

// Search for movies with a query, page, and pageSize
export const searchMovies = async (query, page = 1, pageSize = 10) => {
  try {
    // If no query is provided, return all movies using pagination
    const response = await axios.get(
      `${API_URL}/getall?page=${page}&pageSize=${pageSize}&q=${query}`
    );
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};



