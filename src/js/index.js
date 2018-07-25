import _ from "lodash"; // added to simulate a large project
import Api from "api";

import Nav from "./nav";
import { htmlToElement } from "./util";

// initialise navigation menu event handlers
if (document.getElementById("hamburger")) {
  const nav = new Nav(document.getElementById("hamburger"));
}

const homeEl = document.getElementById("home");

// retrieve home data from API
Api.home.getPage().then(response => {
  // custom data-binding/template implementation
  // Disclaimer: this is not the recommend approach
  homeEl.querySelector("[data-bind=title]").innerHTML = response.title;
  homeEl.querySelector("[data-bind=html]").innerHTML = response.html;
});

const productsEl = document.getElementById("products");

// retrieve products data from API
Api.products.get().then(response => {
  for (let i = 0; i < response.length; i++) {
    const item = response[i];
    // custom data-binding/template implementation
    // Disclaimer: this is not the recommend approach
    let template = `<div class="item card"><div class="thumb"><img src="{{thumbnail}}" /><span class="title">{{title}}</span></div></div>`;
    template = template.replace("{{thumbnail}}", item.thumbnail.src);
    template = template.replace("{{title}}", item.title);
    productsEl.appendChild(htmlToElement(template));
  }
});
