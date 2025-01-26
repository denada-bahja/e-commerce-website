document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".arrow.left");
  const nextButton = document.querySelector(".arrow.right");
  const swipeLeftButton = document.querySelector(".swipe.left");
  const swipeRightButton = document.querySelector(".swipe.right");
  const gridContainer = document.querySelector(".grid-container");

  let currentIndex = 0;


  carouselInner.style.transition = "transform 0.3s ease";
  gridContainer.style.transition = "transform 0.3s ease";

  function moveCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 25}%)`;
  }


  function moveLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    moveCarousel();
  }

  function moveRight() {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    moveCarousel();
  }


  let gridIndex = 0;

  function moveGrid() {
    gridContainer.style.transform = `translateX(-${gridIndex * 25}%)`;
  }

  function swipeLeft() {
    gridIndex = (gridIndex > 0) ? gridIndex - 1 : 3;
    moveGrid();
  }

  function swipeRight() {
    gridIndex = (gridIndex < 3) ? gridIndex + 1 : 0;
    moveGrid();
  }


  prevButton.addEventListener("click", moveLeft);
  nextButton.addEventListener("click", moveRight);
  swipeLeftButton.addEventListener("click", swipeLeft);
  swipeRightButton.addEventListener("click", swipeRight);
});

