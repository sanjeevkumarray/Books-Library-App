import axios from "axios";

const BASE_URL = "https://openlibrary.org";

export const getSubjects = () => {
  return axios.get(`${BASE_URL}/subjects.json`).then((response) => {
    return response.data;
  });
};

export const searchBooks = (query) => {
  return axios.get(`${BASE_URL}/search.json?q=${query}`).then((response) => {
    return response.data.docs;
  });
};
