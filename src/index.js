import "../src/pages/index.css";
import NewsApi from "./js/modules/NewsApi";
import Search from "./js/components/Search";
import NewsCard from "./js/components/NewsCard";
import NewsCards from "./js/components/NewsCards";

const form = document.querySelector(".form");
const searching = document.querySelector(".searching");
const searchResults = document.querySelector(".search-results");
const searchFailed = document.querySelector(".search-failed");
const inputValue = document.querySelector(".form__input");
const showMore = document.querySelector(".search-results__show-more");
const newsArray = document.querySelector(".search-results__cards");
let cardOne = 0;
let cardThree = 3;

const api = new NewsApi();
const search = new Search();
const cards = new NewsCards(newsArray, NewsCard, api, cardOne, cardThree);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search.checkInput(inputValue);
  search.loading(true, searching);
  api
    .request(inputValue)
    .then(() => {
      cards.resetResults(newsArray);
      cards.renderList(searchResults);
      cards.hideButton(showMore);
      search.nothingFound(searchFailed, searchResults);
      localStorage.setItem("keyword", inputValue.value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      search.loading(false, searching);
    });
});

showMore.addEventListener("click", () => {
  cards.renderList(searchResults);
  cards.hideButton(showMore);
});
