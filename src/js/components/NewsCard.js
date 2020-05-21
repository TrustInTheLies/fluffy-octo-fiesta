export default class NewsCard {
  create(url, imageURL, date, title, text, source) {
    const template = document.createElement("div");
    this.template = template;
    template.classList.add("search-results__card");
    template.classList.add("card");
    template.insertAdjacentHTML(
      "beforeend",
      `<a href="${url}" target="_blank"
      ><img
        src="${imageURL}"
        alt="card image"
        class="search-results__card-image"
      />
      <div class="search-results__card-content card-content">
        <p class="search-results__card-date card-date">${date}</p>
        <h3 class="search-results__card-title">
          ${title}
        </h3>
        <p
          class="paragraph search-results__card-paragraph card-paragraph"
        >
          ${text}
        </p>
        <p class="paragraph search-results__card-source">${source}</p>
      </div></a
    >`
    );
    return this.template;
  }
}
