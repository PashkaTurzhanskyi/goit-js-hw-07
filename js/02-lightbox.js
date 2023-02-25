import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsMarkup = galleryItems
  .map((item) => {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join("");

const galleryEl = document.querySelector("ul.gallery");
galleryEl.innerHTML = galleryItemsMarkup;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
