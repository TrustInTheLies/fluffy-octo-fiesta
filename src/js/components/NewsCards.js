export default class NewsCards {
  constructor(container, NewsCard, api, firstCard, lastCard) {
    this.container = container;
    this.NewsCard = NewsCard;
    this.api = api;
    this.firstCard = firstCard;
    this.lastCard = lastCard;
  }
  renderCard(url, imageURL, date, title, text, source) {
    const card = new this.NewsCard();
    card.create(url, imageURL, date, title, text, source);
    this.container.appendChild(card.template);
  }
  renderList(results) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    let data = JSON.parse(localStorage.getItem("results"));
    let shownElements = data.articles.slice(this.firstCard, this.lastCard);
    for (let index = 0; index < shownElements.length; index++) {
      this.renderCard(
        data.articles[this.firstCard].url,
        data.articles[this.firstCard].urlToImage,
        new Date(data.articles[this.firstCard].publishedAt).toLocaleDateString(
          "ru",
          options
        ),
        data.articles[this.firstCard].title,
        data.articles[this.firstCard].description,
        data.articles[this.firstCard].source.name
      );
      this.firstCard++;
      this.lastCard++;
    }
    results.style.display = "block";
  }
  hideButton(button) {
    if (
      JSON.parse(localStorage.getItem("results")).articles.length <=
      this.container.childNodes.length
    ) {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  }
  resetResults(arr) {
    while (arr.hasChildNodes()) {
      arr.removeChild(arr.lastChild);
    }
    this.firstCard = 0;
    this.lastCard = 3;
  }
}
