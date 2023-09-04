import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createCardMarkup } from './js/cardmarkup';
import './sass/index.scss';

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
    showElement(refs.select);
    hideElements(refs.loader);
  })
  .catch(error => {
    showElement(refs.error);
    hideElements(refs.loader);
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
      showElement(refs.error);
      hideElements(refs.loader);
    });
}

function hideElements(element) {
  element.classList.add('is-hidden');
}

function showElement(element) {
  element.classList.remove('is-hidden');
}
