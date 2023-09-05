function createCardMarkup(imgUrl, name, description, temperament) {
  return `<div class="cat-info-container"><div class="image-container"><img class="image" src="${imgUrl}" alt="Photo of ${name}" loading="lazy"></div>
      <div class="text-container">
        <h1>${name}</h1>
        <p>${description}</p>
        <p><span>Temperament: </span>${temperament}</p>
      </div></div>`;
}

export { createCardMarkup };
