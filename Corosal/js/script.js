const carousel = document.getElementById('carousel');
const leftHandle = document.getElementById('leftHandle');
const rightHandle = document.getElementById('rightHandle');

class Carousel {
  constructor(carousel, images, leftHandle, rightHandle, selected = 0) {
    this.carousel = carousel;
    this.images = images;
    this.leftHandle = leftHandle;
    this.rightHandle = rightHandle;
    this.selected = selected;

    this.placeImages();
    this.addListeners();
    this.setSelection();
  }

  addListeners() {
    this.leftHandle.addEventListener('click', this.swipeLeft);
    this.rightHandle.addEventListener('click', this.swipeRight);
  }

  swipeLeft = () => {
    this.selected -= 1;
    if (this.selected < 0) this.selected += this.images.length;
    this.setSelection();
  };

  swipeRight = () => {
    this.selected += 1;
    this.selected %= this.images.length;
    this.setSelection();
  };


  setSelection() {
    const imageHolder = this.carousel.querySelector('.img-holder');

    imageHolder.style.transform = `translateX(${256 * -this.selected}px)`
  }

  placeImages() {
    const imageFrame = document.createElement('div');
    imageFrame.classList.add('img-frame');
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('img-holder');
    this.images.forEach(image => {
      const img = document.createElement('img');
      img.src = `./${image}`;
      imageHolder.appendChild(img);
    });
    imageFrame.appendChild(imageHolder);
    this.carousel.appendChild(imageFrame);
  }

}

new Carousel(
  carousel,
  ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'],
  leftHandle,
  rightHandle
);