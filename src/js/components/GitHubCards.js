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
    const commitsArr = JSON.parse(localStorage.getItem("commits"));
    const options = { day: "numeric", month: "long", year: "numeric" };
    for (let index = 0; index < commitsArr.length; index++) {
      this.renderCard(
        commitsArr[index].html_url,
        commitsArr[index].commit.committer.name,
        commitsArr[index].commit.committer.email,
        new Date(commitsArr[index].commit.committer.date).toLocaleDateString(
          "ru",
          options
        ),
        commitsArr[index].commit.message,
        commitsArr[index].author.avatar_url
      );
    }
    this.swiper.update();
  }
}
