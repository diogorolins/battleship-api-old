const ships = require("../models/Ship");

class ShipController {
  static createShip() {
    return async (req, res) => {
      try {
        const ship = await ships.create(req.body);
        res.location(`ship/${ship.id}`);
        return res.status(201).json(ship);
      } catch (error) {
        console.log(error.name);
        return res.status(500).json({ error: "Error creating ship." });
      }
    };
  }

  static showAllShips() {
    return async (req, res) => {
      try {
        const shipsList = await ships.findAll();
        return res.status(200).json(shipsList);
      } catch (error) {
        console.log(error.name);
        return res.status(500).json({ error: "Error showing ships." });
      }
    };
  }

  static showShipById() {
    return async (req, res) => {
      try {
        const ship = await ships.findOne({ where: req.params });
        if (!ship) return res.status(404).json({ error: "Ship not found" });
        return res.status(200).json(ship);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error showing ship." });
      }
    };
  }
}

module.exports = ShipController;
