export default class NewsApi {
  request(input) {
    const week = 604800000;
    const currentDate = new Date().toISOString();
    const previousDate = new Date(new Date() - week).toISOString();

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${input.value}&from=${previousDate}&to=${currentDate}&pageSize=100&sortBy=popularity&language=ru&apiKey=579ea2b0c42f4f78a363c7ae73ac99c1`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        return localStorage.setItem("results", JSON.stringify(res));
      });
  }
}
