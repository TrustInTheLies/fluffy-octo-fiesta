import sanitizeHTML from "../utils/sanitizeHTML";

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
    <a href="${sanitizeHTML(url)}" target="_blank">
      <div class="card-content">
        <p class="github-history__commit-date card-date">
          ${sanitizeHTML(date)}
        </p>
        <div class="github-history__commit-author">
          <img
            src="${sanitizeHTML(avatar)}"
            alt="photo"
            class="github-history__commit-author-photo"
          />
          <div class="github-history__commit-author-contacts">
            <h3 class="github-history__commit-author-name">
              ${sanitizeHTML(name)}
            </h3>
            <p class="github-history__commit-author-email">
              ${sanitizeHTML(email)}
            </p>
          </div>
        </div>
        <p class="github-history__commit-text card-paragraph">
          ${sanitizeHTML(message)}
        </p>
      </div>
    </a>
  </div>`
    );

    return this.template;
  }
}
