let index2 = 0;

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) index2 = 0;
  if (n < 0) index2 = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.display = i === index2 ? 'block' : 'none';
  });
}

function moveSlide(n) {
  index2 += n;
  showSlides(index2);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(index2);
});