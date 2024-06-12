const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');

const galleryGrid = document.querySelector(".gallery-grid");
const links = galleryGrid.querySelectorAll("a");
const imgs = galleryGrid.querySelectorAll("img");
const lightboxModal = document.getElementById("lightbox-modal");
const bsModal = new bootstrap.Modal(lightboxModal);
const modalBody = lightboxModal.querySelector(".lightbox-content");

function createCaption (caption) {
  return `<div class="carousel-caption d-none d-md-block">
      <h4 class="m-0">${caption}</h4>
    </div>`;
}

function createIndicators (img) {
  let markup = "", i, len;

  const countSlides = links.length;
  const parentCol = img.closest('.col');
  const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

  for (i = 0, len = countSlides; i < len; i++) {
    markup += `
      <button type="button" data-bs-target="#lightboxCarousel"
        data-bs-slide-to="${i}"
        ${i === curIndex ? 'class="active" aria-current="true"' : ''}
        aria-label="Slide ${i + 1}">
      </button>`;
  }

  return markup;
}

function createSlides (img) {
  let markup = "";
  const currentImgSrc = img.closest('.gallery-item').getAttribute("href");

  for (const img of imgs) {
    const imgSrc = img.closest('.gallery-item').getAttribute("href");
    const imgAlt = img.getAttribute("alt");

    markup += `
      <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
        <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
        ${imgAlt ? createCaption(imgAlt) : ""}
      </div>`;
  }

  return markup;
}

function createCarousel (img) {
  const markup = `
    <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
      <div class="carousel-indicators">
        ${createIndicators(img)}
      </div>
      <div class="carousel-inner justify-content-center mx-auto">
        ${createSlides(img)}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;

  modalBody.innerHTML = markup;
}

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const currentImg = link.querySelector("img");
    const lightboxCarousel = document.getElementById("lightboxCarousel");

    if (lightboxCarousel) {
      const parentCol = link.closest('.col');
      const index = [...parentCol.parentElement.children].indexOf(parentCol);

      const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
      bsCarousel.to(index);
    } else {
      createCarousel(currentImg);
    }

    bsModal.show();
  });
}