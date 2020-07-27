const Ship = require("../models/Ship");
const Player = require("../models/Player");

module.exports = () => {
  Ship.sync({ force: true })
    .then(console.log("Table Ship created"))
    .catch((err) => console.log(err));

  Player.sync({ force: true })
    .then(console.log("Table Player created"))
    .catch((err) => console.log(err));
};
