import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => ` <li class="gallery-item">
            <a href='${largeImageURL}'>
                <img clsss="gallery-img" src="${webformatURL}" alt="${tags}" >
            </a>
            <div class="info">
          <p class="info-container">Likes ${likes}</p>
          <p>Views ${views}</p>
          <p>Comments ${comments}</p>
          <p>Downloads ${downloads}</p>
        </div>
    </li> `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
