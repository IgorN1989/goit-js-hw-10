function fetchCatsList(url) {
  fetch(url)
    .then(response => response.json())
    .then(data =>
      refs.select.insertAdjacentHTML('beforeend', addOptions(data))
    );
}

function fetchCatByBreed(breedId) {
  const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&x-api-key=live_OLk1RycgcWv2xBkEUGVJtAj6KrGstFwR9QZRnnjj8HNyEgldoS7QordoNgkDvqzx`;
  fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data[0]));
}

export { fetchCatsList, fetchCatByBreed };
