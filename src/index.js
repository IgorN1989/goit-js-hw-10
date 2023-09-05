import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createOptionMarkup, createCardMarkup } from './js/markup';

const refs = {
  select: document.querySelector('.breed-select'),
  info: document.querySelector('.cat-info'),
  loaderContainer: document.querySelector('.loader-container'),
  body: document.querySelector('body'),
};

hideElement(refs.select);
hideElement(refs.info);

fetchBreeds()
  .then(data => {
    refs.select.insertAdjacentHTML('beforeend', createOptionMarkup(data));

    new SlimSelect({
      select: refs.select,
      settings: {
        placeholderText: 'Choose breed',
      },
    });

    showElement(refs.select);
  })
  .catch(() => {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  })
  .finally(() => {
    hideElement(refs.loaderContainer);
    refs.body.classList.add('empty');
  });

refs.select.addEventListener('change', onSelect);

function onSelect(evt) {
  showElement(refs.loaderContainer);

  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      showElement(refs.info);
      const { imgUrl, name, description, temperament } = data;

      refs.info.innerHTML = createCardMarkup(
        imgUrl,
        name,
        description,
        temperament
      );
      refs.body.classList.remove('empty');
    })
    .catch(() => {
      refs.info.innerHTML = '';
      refs.body.classList.add('empty');
      Notify.failure(`Oops! Something went wrong! Choose another breed!`);
    })
    .finally(() => hideElement(refs.loaderContainer));
}

function hideElement(element) {
  element.hidden = true;
}

function showElement(element) {
  element.hidden = false;
}
