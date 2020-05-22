import "../src/pages/analytics.css";
import Analytics from "./js/components/Analytics";
import {
  titleKeyword,
  newsPerWeek,
  titleMentionsCounter,
  month,
  dates,
  monthDate,
  data,
  startDateCount,
  today,
  graphTexts,
} from "./js/constants/constants";

const days = document.querySelector(".analysis__dates");
const daysArray = days.children;
const graphs = document.querySelector(".analysis__values");
const diagram = graphs.children;
today.setDate(today.getDate() - startDateCount);

const analytics = new Analytics(titleKeyword, data, monthDate);
analytics.setHeaderInfo(titleKeyword, newsPerWeek, titleMentionsCounter, month);
analytics.setDates(daysArray, today);
analytics.dayMentions(data, dates);
analytics.renderDiagram(dates, diagram, graphTexts);
