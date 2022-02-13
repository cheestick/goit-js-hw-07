import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

(function renderGallery() {
  galleryRef.insertAdjacentHTML(
    "afterbegin",
    galleryItems
      .map(
        ({ preview, original, description }, index) =>
          `<a class="gallery__item" href="${original}}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`
      )
      .join("")
  );
})();

galleryRef.addEventListener("click", imageClickHandler);

function imageClickHandler(event) {
  const element = event.target;
  if (element.nodeName !== "IMG") return;

  event.preventDefault();

  //   showOriginalImageModal(element);
}
