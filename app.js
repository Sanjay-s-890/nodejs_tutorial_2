const express = require("express");
const app = express();
const morgan = require('morgan')
const logger = require("./logger");

app.use(morgan('tiny'))
app.use('/api', logger);

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About</h1>`);
});

app.get("/api/products", (req, res) => {
  res.send(`<h1>About</h1>`);
});

app.listen(5000, () => {
  console.log("server running on 5000...");
});
