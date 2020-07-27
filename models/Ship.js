const { Model, DataTypes } = require("sequelize");
const ConnectionFactory = require("../config/connection-factory");

const sequelize = ConnectionFactory.getConnection();
class Ship extends Model {}

Ship.init(
  {
    // attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Ship",
  }
);

module.exports = Ship;
