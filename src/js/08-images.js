import { fetchQuery } from './pixabay';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const moreBtn = document.querySelector('.load-more');

console.log('hello');

moreBtn.classList.add('hidden');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  const query = form.elements.searchQuery.value;
  let page = 1;
  fetchQuery(query, page).then(data => {
    gallery.insertAdjacentHTML('beforeend', imagesMarkup(data.hits));
    moreBtn.classList.remove('hidden');
  });

  moreBtn.addEventListener('click', hadleClick);

  function hadleClick() {
    const query = form.elements.searchQuery.value;
    page += 1;
    fetchQuery(query, page).then(data => {
      gallery.insertAdjacentHTML('beforeend', imagesMarkup(data.hits));
      if (data.totalHits < page * 40) {
        moreBtn.classList.add('hidden');
      }
    });
  }
}

function imagesMarkup(arr) {
  return arr
    .map(
      ({ webformatURL, tags, likes, views, comments, downloads }) =>
        `<div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
        <div class="info">
          <p class="info-item">
            <b>Likes</br>${likes}</b>
          </p>
          <p class="info-item">
            <b>Views</br>${views}</b>
          </p>
          <p class="info-item">
            <b>Comments</br>${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads</br>${downloads}</b>
          </p>
        </div>
      </div>`
    )
    .join('');
}
