const galleryItems = document.querySelectorAll('.js-gallery__items');

function toggleOpen() {
  this.classList.toggle('gallery__item_open');
}

function toggleActive(e) {
  if (e.propertyName.includes('grow')) {
    this.classList.toggle('gallery__item_open-active');
  }
}

galleryItems.forEach(item => item.addEventListener('click', toggleOpen));
galleryItems.forEach(item => item.addEventListener('transitionend', toggleActive));
