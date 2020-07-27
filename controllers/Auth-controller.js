const bcrypt = require("bcryptjs");
const Player = require("../models/Player");
const TokenService = require("../config/tokenService");

class AuthController {
  static login() {
    return async (req, res) => {
      try {
        const { email, password } = req.body;

        const player = await Player.findOne({ where: { email } });
        if (!player) return res.status(400).json({ error: "User not found" });
        if (!(await bcrypt.compare(password, player.password)))
          return res.status(400).json({ error: "Invalid password" });

        player.password = undefined;

        const token = TokenService.generateToken(player.id);
        res.status(200).json({ player, token });
      } catch (error) {
        console.log(error.name);
        return res.status(500).json({ error: "Error creating player." });
      }
    };
  }
}

module.exports = AuthController;
