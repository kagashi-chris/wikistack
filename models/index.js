const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging:false});


const Page = db.define("page", {
  title: { type: Sequelize.STRING, allowNull: false, defaultValue: "none" },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.ENUM("open", "closed") },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
});

module.exports = {
  db,
  Page,
  User,
};
