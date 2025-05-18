// import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');

fetchBreeds()
  .then(response => {
    // select.classList.;
    select.innerHTML = renderCats(response.data);
    // new SlimSelect({
    //   select: select,
    //   settings: {
    //     placeholderText: 'Choose a cat )',
    //   },
    // });
  })
  .catch(error => {
    console.log(error);
  });
// .catch(
//   Notiflix.Notify.failure(
//     'Oops! Something went wrong! Try reloading the page!'
//   )
// );

function renderCats(cats) {
  return cats
    .map(
      cat => `
          <option value="${cat.id}">${cat.name}</option>`
    )
    .join('');
}

select.addEventListener('change', seeDescription);

function seeDescription(event) {
  const selectedValue = event.currentTarget.value;
  fetchCatByBreed(`${selectedValue}`)
    .then(response => {
      info.innerHTML = renderDescription(...response.data);
    })
    .catch(error => {
      console.log(error);
    });
  // .catch(
  //   Notiflix.Notify.failure(
  //     'Oops! Something went wrong! Try reloading the page!'
  //   )
  // );
}

function renderDescription({ breeds, url }) {
  return `<img src="${url}" alt="${breeds[0].name}" width="500px">
  <h1>${breeds[0].name}</h1>
  <p>${breeds[0].description}</p>
  <p>Temperament:${breeds[0].temperament}</p>`;
}
