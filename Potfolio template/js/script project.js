var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1, // Set to 1 to swipe one card at a time
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Autoplay will not be disabled on user interactions
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
