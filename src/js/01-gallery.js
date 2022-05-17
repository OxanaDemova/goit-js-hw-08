// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems.map((item) => {

    const galleryImg = 
    `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
    
    return galleryImg
})

gallery.insertAdjacentHTML('beforeend', createGallery.join(''));

let selectImg = new SimpleLightbox('.gallery a',
    {
        captionDelay: 250,
        captionsData: 'alt'
    }
);



console.log(galleryItems);
