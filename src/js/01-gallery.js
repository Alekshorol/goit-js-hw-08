import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function makeGalleryMarkup(gallery) {
  return gallery.map(item => makeItemMarkup(item)).join('');
}

function makeItemMarkup({ original, preview, description }) {
  return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
}
