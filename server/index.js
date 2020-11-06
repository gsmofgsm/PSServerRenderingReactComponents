const express = require("express");

const app = new express();

app.get("/", (_req, res) => {
  // we are not going to use req, so
  // prepend with _ to let others know it is not used
  res.send(`<h1>REACT IS EXCELLENT</h1>`);
});

app.listen(7777);
console.info("Server is listening");
