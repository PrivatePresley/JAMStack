const API =
  "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=oCEFo4UVBDvepqukE5Dk1OhFcrAd0GlL";

function getStories() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data["results"]));
}

function showData(stories) {
  var queryStories = document.querySelector(".stories");
  var looped = stories
    .map(
      (article) => `
        <div class="item">
          <picture>
            <img src="${article.multimedia[1].url}" alt="" />
            <figcaption>${article.multimedia[2].caption}</figcaption>
            <random></random>
          </picture>
          <h3><a href="${article.url}">${article.title}</a></h3>
          <p>${article.abstract}</p>
        </div>
      `
    )
    .join("");
  queryStories.innerHTML = looped;
}

if (document.querySelector(".home")) {
  getStories();
}
