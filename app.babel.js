/* global  __dirname */
/* global  process */

"use strict";

import fs from "fs";
import https from "https";
import path from "path";
import express from "express";
import exphbs from "express-handlebars";
import handlebars from "handlebars";
import bodyParser from "body-parser";
import compression from "compression";
import session from "express-session";

// custom helpers
import { requireHttps } from "./server/helpers/routing.js";
import { defaultPathConfig } from "./server/helpers/pathConfig";

// umbraco imports
import Api from "api";

const API_URL = `${process.env.API_URL}`;

// configuration
const config = {
  environment: process.env.NODE_ENV || "development",
  isHttps: process.env.isHttps === true || false
};

const app = express();
app.use(compression());

const viewsDir = "./templates";

// setup express to use handlebars as the templating engine
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, `${viewsDir}/layouts`),
  partialsDir: path.join(__dirname, `${viewsDir}/partials`),
  extname: ".hbs"
});

// allows partials to be organised in subfolders
hbs
  .getTemplates(path.join(__dirname, `${viewsDir}/partials`))
  .then(function(partials) {
    for (let partial in partials) {
      handlebars.registerPartial(partial, "{{" + partial + "}}");
    }
  })
  .catch(error => {
    console.log(`Unable to retrieve templates. Error: ${error}`);
  });

app.set("views", path.join(__dirname, `${viewsDir}`));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// preload webfonts
app.use("/fonts", (req, res, next) => {
  res.set(
    "Link",
    `${req.protocol +
      "://" +
      req.get("host") +
      req.originalUrl}; rel=preload; as=style`
  );
  next();
});

// setup server for static assets
app.use(
  "/",
  express.static(path.join(__dirname, "dist"), { maxAge: 604800000 })
);

// require HTTPS
app.use(requireHttps);

// Setup body parser for parsing POST request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionExpiration = 20 * 60 * 1000; // 20 minutes

// setup a single server-side URL (disclaimer: no SSR)
app.get("/*", (req, res) => {
  // render the response
  res.render("index", defaultPathConfig);
});

app.use(function(error, req, res, next) {
  console.error(error.message);
  if (config.environment === "development") {
    throw error;
  } else {
    res.status(500);
    res.render("500", { layout: false });
  }
  return;
});

// use the environment's port or a random port
const port =
  process.env.port ||
  (process.env.isDev
    ? 3000
    : Math.floor(Math.random() * (65535 - 1024)) + 1024);
app.listen(port, () => {
  console.log(`Running ${config.environment} on localhost:${port}`);
});

module.exports = app;
