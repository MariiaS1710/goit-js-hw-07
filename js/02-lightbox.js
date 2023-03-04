import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryItemsEl = galleryItems.map(el => {
    return `<a class = "gallery__item" href="${el.original}"> 
    <img class = "gallery__image" src="${el.preview}" alt="${el.description}" title = "${el.description}"/>
    </a>
    `
})
    .join("");


galleryContainer.insertAdjacentHTML('beforeend',  galleryItemsEl);

  var lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
    });
