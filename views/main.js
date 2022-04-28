const html = require("html-template-tag");
const layout = require("./layout");

function createList(pages) {
  const unorderList = document.getElementById("listPages");
  for (let index = 0; index < pages.length; index++) {
    const child = document.createElement("li");
    unorderList.appendChild(child);
  }
}

module.exports = (pages) =>
  layout(html` <h3>Pages</h3>
    <hr />
    <form method="GET" action="/wiki/search">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
    <hr />
    <ul class="list-unstyled">
      <ul id="listPages">
        <li>${pages}</li>
      </ul>
    </ul>`);
