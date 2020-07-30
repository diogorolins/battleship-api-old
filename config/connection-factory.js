const Sequelize = require("sequelize");

const DB_DATABASE = "new_battleship";
const DB_USER = "root";
const DB_PASSWORD = "";
const DB_CONNECTION = "localhost";
const DB = "mysql";

class ConnectionFactory {
  static getConnection() {
    const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
      logging: console.log,
      host: DB_CONNECTION,
      dialect: DB,
    });

    return sequelize;
  }
}

module.exports = ConnectionFactory;
