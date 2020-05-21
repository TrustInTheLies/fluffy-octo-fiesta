export default class CommitCard {
  create(url, name, email, date, message, avatar) {
    const template = document.createElement("div");
    this.template = template;
    template.classList.add("github-history__commit");
    template.classList.add("card");
    template.classList.add("swiper-slide");
    template.insertAdjacentHTML(
      "beforeend",
      `<div class="github-history__commit card swiper-slide">
    <a href="${url}" target="_blank">
      <div class="card-content">
        <p class="github-history__commit-date card-date">
          ${date}
        </p>
        <div class="github-history__commit-author">
          <img
            src="${avatar}"
            alt="photo"
            class="github-history__commit-author-photo"
          />
          <div class="github-history__commit-author-contacts">
            <h3 class="github-history__commit-author-name">
              ${name}
            </h3>
            <p class="github-history__commit-author-email">
              ${email}
            </p>
          </div>
        </div>
        <p class="github-history__commit-text card-paragraph">
          ${message}
        </p>
      </div>
    </a>
  </div>`
    );

    return this.template;
  }
}
