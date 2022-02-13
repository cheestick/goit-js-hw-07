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

const basicLightBoxScriptMarkup = `<script 
src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js" 
  integrity="sha256-nMn34BfOxpKD0GwV5nZMwdS4e8SI8Ekz+G7dLeGE4XY="
  crossorigin="anonymous"
></script>`;

const basicLightBoxCSSMarkup = `<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
  integrity="sha256-r7Neol40GubQBzMKAJovEaXbl9FClnADCrIMPljlx3E="
  crossorigin="anonymous"
></link>`;

(function addBasicLightBoxLib() {
  document
    .querySelector("script")
    .insertAdjacentHTML("beforebegin", basicLightBoxScriptMarkup);

  document.head.lastElementChild.insertAdjacentHTML(
    "afterend",
    basicLightBoxCSSMarkup
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
