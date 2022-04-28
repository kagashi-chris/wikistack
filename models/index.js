const Sequelize = require("sequelize");
const db = new Sequelize("wikistack", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const Page = db.define("page", {
  title: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
  content: { type: Sequelize.STRING },
  status: { type: Sequelize.ENUM("open", "closed") },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = {
  db,
  Page,
  User,
};
