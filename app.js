const { urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 3000;

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
