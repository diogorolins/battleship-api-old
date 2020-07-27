const players = require("../models/Player");
const TokenService = require("../config/tokenService");

class PlayerController {
  static createPlayer() {
    return async (req, res) => {
      try {
        const player = await players.create(req.body);
        player.password = undefined;
        res.location(`players/${player.id}`);
        const token = TokenService.generateToken(player.id);
        return res.status(201).json({ player, token });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error creating player." });
      }
    };
  }

  static showAllPlayers() {
    return async (req, res) => {
      try {
        const playersList = await players.findAll();
        playersList.map((p) => (p.password = undefined));
        return res.status(200).json(playersList);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error showing player." });
      }
    };
  }

  static showPlayerById() {
    return async (req, res) => {
      try {
        const player = await players.findOne({ where: req.params });
        if (!player) return res.status(404).json({ error: "Player not found" });
        player.password = undefined;
        return res.json(player);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error showing player." });
      }
    };
  }
}

module.exports = PlayerController;
