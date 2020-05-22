export default class Search {
  checkInput(field) {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Нужно ввести ключевое слово");
    }
    field.setCustomValidity("");
  }
  loading(processing, loader, prevResults) {
    if (processing) {
      loader.style.display = "block";
      prevResults.style.display = "none";
    } else {
      loader.style.display = "none";
    }
  }
  nothingFound(error, results) {
    if (JSON.parse(localStorage.getItem("results")).articles.length == 0) {
      error.style.display = "flex";
      results.style.display = "none";
    } else {
      error.style.display = "none";
    }
  }
}
