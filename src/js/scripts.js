import "../style/style.scss";
import { openNav } from "./navigation";

const init = () => {
  const navBtn = document.querySelector("#hamburger");
  navBtn.addEventListener("click", openNav);
};

init();
