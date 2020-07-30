const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
//const exportTables = require("./exportTables");
const authRoute = require("../routes/auth");
const shipsRoute = require("../routes/ships");
const playersRoute = require("../routes/players");
const ConnectionFactory = require("../config/connection-factory");

const sequelize = ConnectionFactory.getConnection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/auth", authRoute);
app.use("/ships", shipsRoute);
app.use("/players", playersRoute);

//exportTables();

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = app;
