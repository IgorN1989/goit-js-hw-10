import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createCardMarkup } from './js/cardmarkup';

const refs = {
  select: document.querySelector('.breed-select'),
  info: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

hideElements(refs.select);
hideElements(refs.error);
hideElements(refs.info);

fetchBreeds()
  .then(data => {
    refs.select.insertAdjacentHTML('beforeend', addOptions(data));
    new SlimSelect({
      select: refs.select,
    });
    showElement(refs.select);
    hideElements(refs.loader);
  })
  .catch(error => {
    console.log(error);
    showElement(refs.error);
    hideElements(refs.loader);
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  });

refs.select.addEventListener('change', onSelect);

function addOptions(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function onSelect(evt) {
  showElement(refs.loader);

  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      hideElements(refs.loader);
      showElement(refs.info);
      const { imgUrl, name, description, temperament } = data;

      refs.info.innerHTML = createCardMarkup(
        imgUrl,
        name,
        description,
        temperament
      );
    })
    .catch(error => {
      console.log(error);
      showElement(refs.error);
      hideElements(refs.loader);
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    });
}

function hideElements(element) {
  element.classList.add('is-hidden');
}

function showElement(element) {
  element.classList.remove('is-hidden');
}
