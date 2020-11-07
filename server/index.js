// const express = require("express");
import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { App } from "../client/App";

const data = {
  questions: [
    {
      questionId: "Q1",
      content: "Should we use Jquery or Fetch for Ajax?",
    },
    {
      questionId: "Q2",
      content: "What is the best feature of React?",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "JQuery",
    },
    {
      answerId: "A2",
      questionId: "Q1",
      upvotes: 1,
      content: "Fetch",
    },
    {
      answerId: "A3",
      questionId: "Q2",
      upvotes: 1,
      content: "Performance",
    },
    {
      answerId: "A4",
      questionId: "Q2",
      upvotes: 3,
      content: "Ease of use",
    },
  ],
};

const app = new express();

app.use(express.static("dist"));

app.get("/data", async (_req, res) => {
  res.json(data);
});

app.get("/", async (_req, res) => {
  // we are not going to use req, so
  // prepend with _ to let others know it is not used
  //   res.send(`<h1>REACT IS EXCELLENT</h1>`);

  const index = readFileSync(`public/index.html`, `utf-8`);
  const rendered = renderToString(<App {...data} />);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.info("Server is listening");
