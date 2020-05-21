import "../node_modules/swiper/css/swiper.min.css";
import "../node_modules/swiper/js/swiper.min.js";
import Swiper from "swiper";
import "../src/pages/about.css";
import GitHubApi from "./js/modules/GitHubApi";
import GitHubCards from "./js/components/GitHubCards";
import CommitCard from "./js/components/CommitCard";

const commitsArray = document.querySelector(".github-history__commits");

const swiper = new Swiper(".swiper-container", {
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

const githubApi = new GitHubApi();
const commits = new GitHubCards(commitsArray, CommitCard, githubApi);
commits.renderList(swiper);
