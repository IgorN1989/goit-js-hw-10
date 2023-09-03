import axios from 'axios';
// console.log(axios);
import { fetchCatsList, fetchCatByBreed } from './cat-api';
console.log(fetchCatsList);
console.log(fetchCatByBreed);

// axios.defaults.headers.common['x-api-key'] =
//   'live_OLk1RycgcWv2xBkEUGVJtAj6KrGstFwR9QZRnnjj8HNyEgldoS7QordoNgkDvqzx';

// const API_KEY =
//   'live_OLk1RycgcWv2xBkEUGVJtAj6KrGstFwR9QZRnnjj8HNyEgldoS7QordoNgkDvqzx';
// //   'x-api-key';

const refs = {
  select: document.querySelector('.breed-select'),
  info: document.querySelector('.cat-info  '),
};

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

// fetchCatsList(BASE_URL);

refs.select.addEventListener('change', () => {
  fetchCatByBreed(refs.select.value);

  // createMarkup(fetchCatByBreed(refs.select.value));
});

function addOptions(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createMarkup(arr) {
  console.log(arr);
}
