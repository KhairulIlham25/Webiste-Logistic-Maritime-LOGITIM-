
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

let autoSlideInterval = null;
let hasInteracted = false;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}vw)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function startAutoSlide() {
  if (!hasInteracted) {
    hasInteracted = true;
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
}

document.querySelector('.right').addEventListener('click', () => {
  nextSlide();
  startAutoSlide();
});

document.querySelector('.left').addEventListener('click', () => {
  prevSlide();
  startAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    startAutoSlide();
  });
});
