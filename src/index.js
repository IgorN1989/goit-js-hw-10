import axios from 'axios';
// console.log(axios);

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

fetch(`${BASE_URL}`)
  .then(response => response.json())
  .then(data => console.log(data));
