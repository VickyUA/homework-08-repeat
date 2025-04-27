// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log('hello world');

const newGallery = document.querySelector('.gallery');

const markUp = arr => {
  return arr
    .map(
      item =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join('');
};

newGallery.insertAdjacentHTML('beforeend', markUp(galleryItems));

let picture = new SimpleLightbox('.gallery__item a', {
  captionDelay: 250,
  captionsData: 'alt',
});
