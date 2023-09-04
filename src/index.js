import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createCardMarkup } from './js/cardmarkup';

const refs = {
  select: document.querySelector('.breed-select'),
  info: document.querySelector('.cat-info'),
  loaderContainer: document.querySelector('.loader-container'),
};

fetchBreeds()
  .then(data => {
    refs.select.insertAdjacentHTML('beforeend', addOptions(data));
    new SlimSelect({
      select: refs.select,
    });
    showElement(refs.select);
  })
  .catch(() => {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  })
  .finally(() => hideElement(refs.loaderContainer));

refs.select.addEventListener('change', onSelect);

function addOptions(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function onSelect(evt) {
  showElement(refs.loaderContainer);

  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      showElement(refs.info);
      const {
        imgUrl = 'https://logowik.com/content/uploads/images/cat8600.jpg',
        name,
        description,
        temperament,
      } = data;

      refs.info.innerHTML = createCardMarkup(
        imgUrl,
        name,
        description,
        temperament
      );
    })
    .catch(() => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    })
    .finally(() => hideElement(refs.loaderContainer));
}

function hideElement(element) {
  element.hidden = true;
}

function showElement(element) {
  element.hidden = false;
}
