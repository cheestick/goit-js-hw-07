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

const modalImagePreview = basicLightbox.create(
  `
    <div class="modal">
        <img src="" alt=""/>
    </div>
`,
  { onShow: whenModalShown, onClose: whenModalClosed }
);

function imageClickHandler(event) {
  const element = event.target;
  if (element.nodeName !== "IMG") return;

  event.preventDefault();

  showOriginalImageModal(element);
}

function showOriginalImageModal(image) {
  const {
    dataset: { source },
    alt,
  } = image;

  changeModalImageAttributes(source, alt);
  modalImagePreview.show();
}

function changeModalImageAttributes(src, alt) {
  const imageRef = modalImagePreview.element().querySelector("img");
  imageRef.src = src || "";
  imageRef.alt = alt || "";
}

function clearModalImageAttributes() {
  changeModalImageAttributes("", "");
}

function closeByEscHandler(event) {
  if (event.code !== "Escape") return;
  modalImagePreview.close();
}

function whenModalShown() {
  window.addEventListener("keydown", closeByEscHandler);
}

function whenModalClosed() {
  window.removeEventListener("keydown", closeByEscHandler);
}
