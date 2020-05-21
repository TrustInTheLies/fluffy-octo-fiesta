export default class GitHubApi {
  request() {
    return fetch(
      "https://api.github.com/repos/TrustInTheLies/fluffy-octo-fiesta/commits?per_page=20"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        return localStorage.setItem("commits", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
