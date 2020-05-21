import "../src/pages/analytics.css";
import Analytics from "./js/components/Analytics";

const titleKeyword = document.querySelector(".request__title-keyword");
const newsPerWeek = document.querySelector(".request__during-week");
const titleMentionsCounter = document.querySelector(".request__in-titles");
const month = document.querySelector(".analysis__month");
const graphs = document.querySelector(".analysis__values");
const diagram = graphs.children;
const dates = [];
const monthDate = new Date().toLocaleDateString("ru", { month: "long" });
const data = JSON.parse(localStorage.getItem("results"));
let days = document.querySelector(".analysis__dates");
let daysArray = days.children;
let today = new Date();
today.setDate(today.getDate() - 7);
let graphTexts = document.querySelectorAll(".analysis__value-number");

const analytics = new Analytics(titleKeyword, data, monthDate);
analytics.setHeaderInfo(titleKeyword, newsPerWeek, titleMentionsCounter, month);
analytics.setDates(daysArray, today);
analytics.dayMentions(data, dates);
analytics.renderDiagram(dates, diagram, graphTexts);
