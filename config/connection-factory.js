const Sequelize = require("sequelize");

if (process.env.NODE_ENV !== "production") {
  require("dotenv/config");
}

class ConnectionFactory {
  static getConnection() {
    const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
    return sequelize;
  }
}

module.exports = ConnectionFactory;
