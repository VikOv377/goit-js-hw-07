import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

/*Створюємо галерею*/

function createGalleryItems ({ preview, original, description}) {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </div>
    `;
}

const addGalleryItems = galleryItems.map(createGalleryItems).join('');
galleryContainer.insertAdjacentHTML ('beforeend', addGalleryItems);

/*Добавляємо властивості галереї SimpleLightBox*/

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, scrollZoom: true, captionsData: "alt" });