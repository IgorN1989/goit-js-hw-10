function createCardMarkup(imgUrl, name, description, temperament) {
  return `<img src="${imgUrl}" alt="Photo of ${name}" width=300>
      <div>
        <h1>${name}</h1>
        <h2>Description:<h2>
        <p>${description}</p>
        <h2>Temperament:<h2>
        <p>${temperament}</p>
      </div>`;
}

export { createCardMarkup };
