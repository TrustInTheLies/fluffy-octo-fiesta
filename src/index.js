import "../src/pages/index.css";
import NewsApi from "./js/modules/NewsApi";
import Search from "./js/components/Search";
import NewsCard from "./js/components/NewsCard";
import NewsCards from "./js/components/NewsCards";
import {
  form,
  searching,
  searchResults,
  searchFailed,
  errorTitle,
  errorMessage,
  formInput,
  searchButton,
  showMore,
  newsArray,
} from "./js/constants/constants";

let cardOne = 0;
let cardThree = 3;

const api = new NewsApi();
const search = new Search();
const cards = new NewsCards(newsArray, NewsCard, api, cardOne, cardThree);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search.checkInput(formInput);
  search.loading(true, searching, searchResults);
  searchButton.setAttribute("disabled", "disabled");
  formInput.setAttribute("disabled", "disabled");
  api
    .request(formInput)
    .then(() => {
      cards.resetResults(newsArray);
      cards.renderList(searchResults);
      cards.hideButton(showMore);
      search.nothingFound(searchFailed, searchResults);
      localStorage.setItem("keyword", formInput.value);
    })
    .catch(() => {
      searchFailed.style.display = "flex";
      errorTitle.textContent = "Простите :(";
      errorMessage.textContent =
        "Что-то пошло не так, попробуйте повторить запрос позже";
    })
    .finally(() => {
      searchButton.removeAttribute("disabled");
      formInput.removeAttribute("disabled");
      search.loading(false, searching);
    });
});

showMore.addEventListener("click", () => {
  cards.renderList(searchResults);
  cards.hideButton(showMore);
});
