export const openNav = () => {
  const navEl = document.querySelector("#nav");
  const navBtn = document.querySelector("#hamburger");
  navEl.classList.toggle("nav--open");
  navBtn.classList.toggle("hamburger--active");
};
