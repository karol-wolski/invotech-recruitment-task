export const logos = new Swiper(".logos", {
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 170,
    },
  },
  autoplay: {
    delay: 2000,
  },
});
