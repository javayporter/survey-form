const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "frontend")));

app.listen(3000, () => {
  console.log("app listenting on 3000");
  console.log(path.join(__dirname, "frontend"));
});
