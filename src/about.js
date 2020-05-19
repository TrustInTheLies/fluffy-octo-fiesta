import "../node_modules/swiper/css/swiper.min.css";
import "../node_modules/swiper/js/swiper.min.js";
import Swiper from "swiper";
import "../src/pages/about.css";

var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
