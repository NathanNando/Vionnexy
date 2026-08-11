

let current = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[current].classList.remove('ativo');
  current = (current + 1) % slides.length;
  slides[current].classList.add('ativo');
}

setInterval(nextSlide, 3000);