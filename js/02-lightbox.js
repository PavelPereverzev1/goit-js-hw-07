import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// створюємо масив елементів списку
const addedElements = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
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
  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionClass: 'caption',
  });
}
