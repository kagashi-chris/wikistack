const express = require("express");
const router = express.Router();
const { addPage } = require("../views/");

router.get("/", async (req, res, next) => {
  res.send("wiki.js");
});

router.get("/add", async (req, res, next) => {
  res.send(addPage());
});

router.post("/", async (req, res, next) => {
  try {
    res.send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
