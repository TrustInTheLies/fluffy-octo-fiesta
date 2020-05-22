export const form = document.querySelector(".form");
export const searching = document.querySelector(".searching");
export const searchResults = document.querySelector(".search-results");
export const searchFailed = document.querySelector(".search-failed");
export const errorTitle = document.querySelector(".search-failed__message");
export const errorMessage = document.querySelector(".search-failed__paragraph");
export const formInput = document.querySelector(".form__input");
export const searchButton = document.querySelector(".form__button");
export const showMore = document.querySelector(".search-results__show-more");
export const newsArray = document.querySelector(".search-results__cards");
export const titleKeyword = document.querySelector(".request__title-keyword");
export const newsPerWeek = document.querySelector(".request__during-week");
export const titleMentionsCounter = document.querySelector(
  ".request__in-titles"
);
export const month = document.querySelector(".analysis__month");
export const dates = [];
export const monthDate = new Date().toLocaleDateString("ru", { month: "long" });
export const data = JSON.parse(localStorage.getItem("results"));
export const startDateCount = 7;
export const today = new Date();
export const graphTexts = document.querySelectorAll(".analysis__value-number");
export const commitsArray = document.querySelector(".github-history__commits");
