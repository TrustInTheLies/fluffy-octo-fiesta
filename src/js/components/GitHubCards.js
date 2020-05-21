export default class GitHubCards {
  constructor(container, CommitCard, api) {
    this.container = container;
    this.CommitCard = CommitCard;
    this.api = api;
  }
  renderCard(url, name, email, date, message, avatar) {
    const card = new this.CommitCard();
    card.create(url, name, email, date, message, avatar);
    this.container.appendChild(card.template);
  }
  renderList(swiper) {
    this.swiper = swiper;
    let data = JSON.parse(localStorage.getItem("commits"));
    const options = { day: "numeric", month: "long", year: "numeric" };
    for (let index = 0; index < data.length; index++) {
      this.renderCard(
        data[index].html_url,
        data[index].commit.author.name,
        data[index].commit.author.email,
        new Date(data[index].commit.author.date).toLocaleDateString(
          "ru",
          options
        ),
        data[index].commit.message,
        data[index].author.avatar_url
      );
    }
    this.swiper.update();
  }
}
