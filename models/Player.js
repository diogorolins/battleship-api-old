const { Model, DataTypes } = require("sequelize");
const ConnectionFactory = require("../config/connection-factory");
const bcrypt = require("bcryptjs");
const sequelize = ConnectionFactory.getConnection();
class Player extends Model {}

Player.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    isAdm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Player",
  }
);

Player.addHook("beforeSave", async (player, options) => {
  player.password = await bcrypt.hash(player.password, 10);
});

module.exports = Player;
