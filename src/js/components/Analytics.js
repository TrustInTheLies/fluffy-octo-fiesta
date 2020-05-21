export default class Analytics {
  constructor(title, db, monthFormat) {
    this.title = title;
    this.db = db;
    this.monthFormat = monthFormat;
  }
  titleMentions() {
    this.title = this.title.textContent;
    let mentions = 0;
    this.db.articles.forEach((elem) => {
      elem.title = elem.title.toLowerCase();
      let keyword = this.title.toLowerCase();
      if (elem.title.includes(keyword)) {
        return mentions++;
      }
    });
    return mentions;
  }

  setHeaderInfo(title, weekly, counter, month) {
    title.textContent = localStorage.getItem("keyword");
    weekly.textContent = this.db.totalResults;
    counter.textContent = this.titleMentions();
    month.textContent = this.monthFormat;
  }

  dayMentions(db, arr) {
    db.articles.forEach((article) => {
      const mentions = new Date(article.publishedAt).getDay();
      if (mentions in arr) {
        arr[mentions]++;
      } else {
        arr[mentions] = 1;
      }
    });
    return arr;
  }

  setDates(arr, day) {
    const options = { day: "numeric", weekday: "short" };
    arr.forEach((date) => {
      date.textContent = new Date(
        day.setDate(day.getDate() + 1)
      ).toLocaleDateString("ru", options);
    });
  }

  renderDiagram(dates, graphs, values) {
    for (let index = 0; index < dates.length; index++) {
      for (let index = 0; index < graphs.length; index++) {
        graphs[index].style.width = `${dates[index]}%`;
      }
    }
    for (let index = 0; index < dates.length; index++) {
      for (let index = 0; index < values.length; index++) {
        values[index].textContent = `${dates[index]}`;
      }
    }
  }
}
