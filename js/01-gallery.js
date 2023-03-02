import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryItemsEl = galleryItems.map(el => {
    return `<div class="gallery__item"> 
    <a class = "gallery__link" href="${el.original}"> 
    <img class = "gallery__image" data-sourse = "${el.original}" src="${el.preview}" alt="${el.description}"/>
    </a>
    </div>`
})
    .join("");

galleryContainer.insertAdjacentHTML('beforeend',  galleryItemsEl);

galleryContainer.addEventListener('click', onImg);

function onImg(ev) {
    ev.preventDefault();
    if (ev.target.nodeName !== 'IMG')     return
    const imgSelected = ev.target.getAttribute('data-sourse');
    // console.log(imgSelected)
    
    
    const galleryModal = basicLightbox.create(`
    <img src = "${imgSelected}" width = '600' height = '400'/> 
`)
    
galleryModal.show() 
};

    