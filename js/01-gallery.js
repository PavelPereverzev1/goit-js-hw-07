import { galleryItems } from './gallery-items.js';
// Change code below this line

// створюємо масив елементів списку
const addedElements = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
});

// додавання елементів до розмітки
const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('afterbegin', addedElements.join(''));

// додаємо обробник події до галереї
galleryList.addEventListener('click', selectImg);

function selectImg(event) {
  // відміняємо перехід за посиланням
  event.preventDefault();
  //викликаємо створення модального вікна
  viewOriginal(event.target.dataset.source);
}

function viewOriginal(url) {
  const instance = basicLightbox.create(`<img width="1280" src="${url}">`);
  instance.show();
  // додаємо закриття по Escape
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}
