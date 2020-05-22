import sanitizeHTML from "../utils/sanitizeHTML";

export default class NewsCard {
  create(url, imageURL, date, title, text, source) {
    const template = document.createElement("div");
    this.template = template;
    template.classList.add("search-results__card");
    template.classList.add("card");
    template.insertAdjacentHTML(
      "beforeend",
      `<a href="${sanitizeHTML(url)}" target="_blank"
      ><img
        src="${sanitizeHTML(imageURL)}"
        alt="card image"
        class="search-results__card-image"
      />
      <div class="search-results__card-content card-content">
        <p class="search-results__card-date card-date">${sanitizeHTML(date)}</p>
        <h3 class="search-results__card-title">
          ${sanitizeHTML(title)}
        </h3>
        <p
          class="paragraph search-results__card-paragraph card-paragraph"
        >
          ${sanitizeHTML(text)}
        </p>
        <p class="paragraph search-results__card-source">${sanitizeHTML(
          source
        )}</p>
      </div></a
    >`
    );
    return this.template;
  }
}
