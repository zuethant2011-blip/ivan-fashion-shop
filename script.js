const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const slideWidth = slides[0].offsetWidth + 30;

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 3) {
    index++;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});
