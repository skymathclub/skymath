var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const dbConfig = require("../config/config.json").development;
const User = require("../models").User;

connectToDatabase();

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findById(1);
    const response = { message: `This response came from the node.js app. User ${user.username} is on the database.` };
    res.send(response);
  } catch (error) {
    res.status(422).send(error);
  }
});

function connectToDatabase() {
  const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");

      //Check if database was seeded already, and do it if needed
      User.findById(1).then(user => {
        if (!user) {
          console.log("Database is not seeded, will run seeds now...");
          const { exec } = require("child_process");
          try {
            exec("/opt/node_modules/.bin/sequelize db:seed:all", (err, stdout, stderr) => {
              if (err) {
                console.log(err);
                return;
              }
              console.log(stdout);
            });
          } catch (error) {
            console.log("Error while seeding database: ", error);
          }
        } else {
          console.log("Database already seeded.");
        }
      });
    })
    .catch(err => {
      console.log("Unable to connect to the database:", err);
    });
}


module.exports = router;