const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile("/Users/javayporter/survey-form/frontend/survey_form.html");
});

router.get("/new", (req, res) => {
  res.send("make a new one of em");
});

module.exports = router;
