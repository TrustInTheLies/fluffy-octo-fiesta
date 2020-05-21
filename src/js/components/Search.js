export default class Search {
  checkInput(field) {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Нужно ввести ключевое слово");
    } else {
      field.setCustomValidity("");
    }
  }
  loading(processing, loader) {
    if (processing) {
      loader.style.display = "block";
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
