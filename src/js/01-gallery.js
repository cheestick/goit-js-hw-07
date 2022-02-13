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
  `<img class="js-modal-image" src="" alt=""/>`,
  {
    onShow: () => {
      window.addEventListener("keydown", closeByEscHandler);
    },
    onClose: () => {
      window.removeEventListener("keydown", closeByEscHandler);
    },
  }
);

function imageClickHandler(event) {
  event.preventDefault();
  const element = event.target;
  if (element.nodeName !== "IMG") return;

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
  const imageRef = modalImagePreview.element().querySelector(".js-modal-image");
  imageRef.src = src || "";
  imageRef.alt = alt || "";
}

function closeByEscHandler(event) {
  if (event.code === "Escape") modalImagePreview.close();
}
