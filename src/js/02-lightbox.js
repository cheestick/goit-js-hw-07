import { galleryItems } from "./gallery-items.js";
// Change code below this line

(function renderGallery() {
  const galleryRef = document.querySelector(".gallery");
  galleryRef.insertAdjacentHTML(
    "afterbegin",
    galleryItems
      .map(
        ({ preview, original, description }, index) =>
          `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}"  />
                    </a>`
      )
      .join("")
  );
})();

const options = {
  captionsData: "alt",
  captionDelay: 250,
};

const gallery = new SimpleLightbox(".gallery a", options);
