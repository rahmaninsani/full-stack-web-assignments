const Sequelize = require("sequelize");

const { Hewan } = require("../models");

async function openDbConnection({ dbName, username, password }) {
  const sequelize = new Sequelize(dbName, username, password, {
    host: "localhost",
    dialect: "mysql",
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .then(() => {
      Hewan.sync().then(() => {
        console.log("Table Hewan created.");
      });
    })
    .catch((err) => {
      console.log("Unable to connect to the database:", err);
    });
}

module.exports = openDbConnection;
