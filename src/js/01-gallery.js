import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

(function renderGallery() {
  galleryRef.insertAdjacentHTML(
    "afterbegin",
    galleryItems
      .map(
        ({ preview, original, description }, index) =>
          `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
      )
      .join("")
  );
})();

galleryRef.addEventListener("click", imageClickHandler);

function imageClickHandler(event) {
  const element = event.target;
  if (element.nodeName !== "IMG") return;

  event.preventDefault();

  const {
    dataset: { source },
    alt,
  } = element;
}
