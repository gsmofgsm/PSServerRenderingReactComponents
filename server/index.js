// const express = require("express");
import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { App } from "../client/App";

const app = new express();

app.use(express.static("dist"));

app.get("/", async (_req, res) => {
  // we are not going to use req, so
  // prepend with _ to let others know it is not used
  //   res.send(`<h1>REACT IS EXCELLENT</h1>`);

  const index = readFileSync(`public/index.html`, `utf-8`);
  const rendered = renderToString(<App />);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.info("Server is listening");
