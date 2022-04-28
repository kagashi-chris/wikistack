const express = require("express");
const router = express.Router();
const { addPage } = require("../views/");
const { Page } = require("../models");
const { wikiPage } = require("../views");
const { index } = require("../views");
const { main } = require("../views");

router.get("/", async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res, next) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: { slug: req.params.slug },
    });
    res.send(wikiPage(page));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const slug = generateSlug(req.body.title);
  try {
    const page = await Page.create({
      title: req.body.title,
      slug: slug,
      content: req.body.content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect(`/wiki/${slug}`);
  } catch (error) {
    next(error);
  }
});

function generateSlug(title) {
  return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

module.exports = router;
