let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

function showSlide(index) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const offset = -index * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);

  document.querySelector('.slider-btn.next').addEventListener('click', nextSlide);
  document.querySelector('.slider-btn.prev').addEventListener('click', prevSlide);
});
