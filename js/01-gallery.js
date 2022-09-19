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

/*Додаємо подію кліка на картинку, появи та закривання модального вікна*/


galleryContainer.addEventListener("click", openModalPicture);

function openModalPicture(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
    };

    const instance = basicLightbox.create((`<img src="${event.target.getAttribute('data-source')}" width="800" height="600">`),
    
    {
        onShow: () => {
        document.addEventListener('keydown', onEscapeClose);
    }, 

       onClose: () => {
        document.removeEventListener('keydown', onEscapeClose);
    }
    });

    instance.show()

    function onEscapeClose(event) {
        if(event.key === "Escape") {
            instance.close();
        }
    }
};