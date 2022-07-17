import "../style/style.scss";
import { openNav } from "./navigation";
import { slider } from "./sliderSwiper";
import { logos } from "./brandSwiper";

const init = () => {
  const navBtn = document.querySelector("#hamburger");
  navBtn.addEventListener("click", openNav);
  slider;
  logos;
};

init();
