import "../style/style.scss";
import { openNav } from "./navigation";
import { slider } from "./sliderSwiper";

const init = () => {
  const navBtn = document.querySelector("#hamburger");
  navBtn.addEventListener("click", openNav);
  slider;
};

init();
