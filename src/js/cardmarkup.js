function createCardMarkup(imgUrl, name, description, temperament) {
  return `<div class="image-container"><img class="image" src="${imgUrl}" alt="Photo of ${name}" loading="lazy"></div>
      <div class="text">
        <h1>${name}</h1>
        <p>${description}</p>
        <p><span>Temperament: </span>${temperament}</p>
      </div>`;
}

export { createCardMarkup };
