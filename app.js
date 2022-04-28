const { urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", require("./routes/users.js"));
app.use("/wiki", require("./routes/wiki.js"));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const PORT = 3000;

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: false });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
