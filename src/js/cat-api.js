import { axios } from 'axios';

const URL_OF_BREEDS = 'https://api.thecatapi.com/v1/breeds';
const URL_OF_SEARCH = 'https://api.thecatapi.com/v1/images/search';
const API_KEY =
  'live_OLk1RycgcWv2xBkEUGVJtAj6KrGstFwR9QZRnnjj8HNyEgldoS7QordoNgkDvqzx';

const axios = require('axios');
axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return axios.get(URL_OF_BREEDS).then(response => response.data);
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${URL_OF_SEARCH}?breed_ids=${breedId}`)
    .then(response => response.data)
    .then(data => {
      const imgUrl = data[0].url;
      const { name, description, temperament } = data[0].breeds[0];
      return { imgUrl, name, description, temperament };
    });
}

export { fetchBreeds, fetchCatByBreed };
